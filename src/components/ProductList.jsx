import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage';
import ProductFilters from './ProductFilters';
import ProductDetailsModal from './ProductDetailsModal';
import './ProductList.css';

const API_URL = 'http://localhost:3001/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar produtos');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(nameFilter.toLowerCase());
      const matchesPrice = priceFilter === '' || product.price <= Number(priceFilter);
      return matchesName && matchesPrice;
    });
  }, [products, nameFilter, priceFilter]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-list">
      <ProductFilters
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
      {filteredProducts.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className="product-list-grid">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} onDetails={() => setSelectedProduct(product)} />
          ))}
        </div>
      )}
      <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default ProductList;