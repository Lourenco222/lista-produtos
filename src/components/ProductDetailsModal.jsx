import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetailsModal.css';

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2 className="modal-title">{product.name}</h2>
        <p className="modal-price">R$ {product.price.toLocaleString('pt-BR')}</p>
        <p className="modal-description">{product.description || 'Produto de alta qualidade, perfeito para você!'}</p>
      </div>
    </div>
  );
};

ProductDetailsModal.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProductDetailsModal;