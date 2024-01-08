import React from 'react'
import { Image } from '../Image';
import {useNavigate} from 'react-router-dom';
import './FeaturedProductCard.css';

export default function FeaturedProductCard({ featuredProduct }) {
    const navigate=useNavigate();
    return (
        <div className='featured-product-card' >
            <Image url={featuredProduct.image_url} height={`308px`} />
            <div className="featured-product-name">
                {featuredProduct.name}
            </div>
        </div>
    )
}
