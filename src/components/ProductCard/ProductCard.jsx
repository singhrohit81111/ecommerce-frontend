import React, { useState } from 'react'
import { Image } from '../Image';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const [view, setView] = useState(false);
    const navigate=useNavigate();
    const handleMouseEnter=()=>{
        setView(true)
    }

    const handleMouseLeave=()=>{
        setView(false);
    }
    return (
        <div className='product-card' onClick={()=>{navigate(`/product/${product._id}`)}}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='product-card-image'>
                <Image url={product.image_url} height={`391px`} width={`248px`} />
                {view && <button>View</button>}
            </div>

            <div className="product-details">
                <div className='product-name' >{product.brand}</div>
                <div className="product-size">{product.size}</div>
                <div className="product-price">Rs.{product.new_price}</div>
            </div>
        </div>
    )
}
