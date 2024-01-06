import React from 'react'
import { CartProductCard } from '../CartProductCard';
import { featuredProducts } from '@constants/featuredProducts';
import { useSelector } from 'react-redux';

export default function CartProducts() {
  const cartProducts = useSelector(state=>state.cart.products);
  return (
    <div className='cartProducts-container'>
      {cartProducts.map(cartProduct => (
        <CartProductCard cartProduct={cartProduct}/>
      ))}
    </div>
  )
}
