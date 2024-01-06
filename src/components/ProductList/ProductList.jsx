// ProductList.js
import React from "react";
import "./ProductList.css"; // Import your CSS file for styling
import { ProductCard } from "../ProductCard";

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <div className="card-container">
                {products.map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
