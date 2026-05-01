import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="add-to-cart-btn">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <div className="product-price-container">
            {product.originalPrice && <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>}
            <span className="product-price">₹{product.price.toFixed(2)}</span>
          </div>
          <div className="product-rating">
            <Star size={14} className="star-icon" fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
