import React from 'react';
import PropTypes from 'prop-types';
import './ProductFilters.css';

const ProductFilters = ({ nameFilter, setNameFilter, priceFilter, setPriceFilter }) => (
  <div className="product-filters">
    <input
      type="text"
      placeholder="Filtrar por nome"
      value={nameFilter}
      onChange={e => setNameFilter(e.target.value)}
    />
    <input
      type="number"
      placeholder="Preço máximo"
      value={priceFilter}
      min="0"
      onChange={e => setPriceFilter(e.target.value)}
    />
  </div>
);

ProductFilters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  setNameFilter: PropTypes.func.isRequired,
  priceFilter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setPriceFilter: PropTypes.func.isRequired,
};

export default ProductFilters;