import React from 'react'
import { Image } from '../Image';
import './ProductDetails.css';
import { addProduct } from '@redux/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function ProductDetails({product}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='product-details-container'>
            <div className="product-image">
                <Image url={product.image_url} />
            </div>
            <div className="product-details">
                <div className="product-brand">{product.brand}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-size">{product.size}</div>
                <div className="product-price">₹{product.new_price}</div>
                <div className="produt-description">{product.description}</div>
                <button className="add-to-cart-button" onClick={() => { dispatch(addProduct(product)) }}>Add to Cart</button>
            </div>
        </div>
    )
}
