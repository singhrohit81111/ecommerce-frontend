import React from 'react'
import { ProductDetails } from '@components/ProductDetails';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Header} from '@components/Header';

export default function Product() {
  const {id}=useParams();
  const {items}=useSelector(state=>state.data);
  const filteredProduct=items.find(item=>item._id==id);
  console.log(filteredProduct,id,items);
  return (
    <>
    <Header/>
      <ProductDetails product={filteredProduct}/>
    </>
  )
}
