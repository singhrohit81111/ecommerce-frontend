import React from 'react'
import { useSelector } from 'react-redux';
import './CartPriceBar.css';

export default function CartPriceBar() {
 const cartProducts=useSelector(state=>state.cart.products);
 let totalPrice=cartProducts.reduce((acc,cartProduct)=>acc+cartProduct.quantity*cartProduct.new_price,0);
 console.log(totalPrice);
    return (
        <div className="price-bar">
            <div className="price-details">
                <div className="price-item">
                    <span>Subtotal:</span>
                    <span className="amount">Rs.{totalPrice}</span>
                </div>
                <div className="price-item">
                    <span>Discount:</span>
                    <span className="amount">- 5%</span>
                </div>
                <div className="price-item">
                    <span>Shipping:</span>
                    <span className="amount">free</span>
                </div>
            </div>
            <div className="total">
                <span>Total:</span>
                <span className="amount">Rs.{totalPrice}</span>
                <div className="checkout">
                    <button>CheckOut</button>
                </div>
            </div>
        </div>
    );
}
