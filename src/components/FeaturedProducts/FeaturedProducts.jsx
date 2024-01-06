import React from 'react'
import { dummyProducts } from '@constants/dummyProducts'
import { featuredProducts } from '@constants/featuredProducts';
import { FeaturedProductCard } from '../FeaturedProductCard'
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  return (
    <div className='featured-products'>
      <div className="title-container">
        <span className='title'>FeaturedProducts</span>
      </div>
      <div className="featured-products-list">
        {featuredProducts.map(featuredProduct => {
          return <FeaturedProductCard featuredProduct={featuredProduct} />
        })}
      </div>
    </div>
  )
}
