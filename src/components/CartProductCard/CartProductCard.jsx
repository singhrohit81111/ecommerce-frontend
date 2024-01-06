import React from 'react';
import { Image } from '../Image';
import './CartProductCard.css';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '@redux/slices/cart.slice';
import { removeProduct } from '../../redux/slices/cart.slice';

export default function CartProductCard({ cartProduct }) {
    const dispatch = useDispatch();
    const handleQuantityUpdate = (category,productID) => {
        if (category == "decrement") dispatch(decrement(productID));
        else if (category == 'increment') dispatch(increment(productID));
        else dispatch(removeProduct(productID));
    }
    return (
        <div className='cart-product-card'>
            <div className="cart-product-card-image">
                <Image url={cartProduct.image_url} />
            </div>
            <div className="cart-product-card-details">
                <div className="cart-product-card-brand">
                    {cartProduct.brand}
                </div>
                <div className="cart-product-card-name">
                    {cartProduct.name}
                </div>
                <div className="cart-product-card-price">
                    Rs.{cartProduct.new_price}
                </div>
                <div className="cart-product-card-quantity-buttons">
                    <button className='cart-product-card-quantity-button' onClick={() => { handleQuantityUpdate("decrement", cartProduct._id) }}>-</button>
                    <span className='cart-product-card-quantity'>{cartProduct.quantity}</span>
                    <button className='cart-product-card-quantity-button' onClick={() => { handleQuantityUpdate("increment", cartProduct._id) }}>+</button>
                </div>
                <div className="cart-product-card-remove-button">
                    <button onClick={() => { handleQuantityUpdate("remove", cartProduct._id) }}>REMOVE</button>
                </div>
            </div>
        </div>
    )
}
