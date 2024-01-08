import React from 'react'
import { useSelector } from 'react-redux';
import { Header } from '@components/Header'
import { CartsItemsAndPricebar } from '@components/CartsItemsAndPricebar';
import { EmptyCartMessage } from '@components/EmptyCartMessage';

export default function Cart() {
  const cartLength = useSelector(state => state.cart.products.length);
  return (
    <>
      <Header />
      {cartLength == 0 ? <EmptyCartMessage /> :<CartsItemsAndPricebar/> }
    </>
  )
}
