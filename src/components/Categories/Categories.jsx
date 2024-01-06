import React from 'react'
import { Image } from '../Image'
import {Link} from 'react-router-dom';
import './Categories.css';

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories-title-container">
        <span className='categories-title'>
          Categories
        </span>
      </div>
      <div className="catgeories-images">
        <Link to='/products/men'>
          <Image url="/images/mens.avif" className="categories-image" />
        </Link>
        <Link to='/products/women'>
          <Image url="/images/womens.avif" className="categories-image" />
        </Link>
        <Link to='/products/kids'>
          <Image url="/images/kids.avif" className="categories-image" />
        </Link>
      </div>
    </div>
  )
}


