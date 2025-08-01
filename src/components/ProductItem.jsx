import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';

const ProductItem = ({ product, onDetails }) => (
  <div className="product-item">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">R$ {product.price.toLocaleString('pt-BR')}</p>
    <button className="product-btn" onClick={onDetails}>Ver detalhes</button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onDetails: PropTypes.func,
};

export default ProductItem;