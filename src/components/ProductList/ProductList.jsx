import React from "react";
import "./ProductList.css"; 
import { ProductCard } from "../ProductCard";

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <div className="card-container">
                {products.map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
