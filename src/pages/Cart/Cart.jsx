import React from 'react'
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Header} from '@components/Header'
import CartProducts from '@components/CartProducts/CartProducts';
import CartPriceBar from '@components/CartPriceBar/CartPriceBar';

export default function Cart() {
  const state=useSelector(state=>{return state.cart});
  const navigate=useNavigate();
  console.log(state);
  return (
    <>
    <Header/>
    <CartProducts/>
    <CartPriceBar/>
    </>
  )
}
