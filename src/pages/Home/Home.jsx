import React from 'react'
import { Header } from '@components/Header'
import { Banner } from '@components/Banner'
import { SwipeCarousel } from '@components/SwipeCarousel';
import { FeaturedProducts } from '@components/FeaturedProducts';
import { Categories } from '@components/Categories';
import { Footer } from '@components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <SwipeCarousel />
      <FeaturedProducts />
      <Categories />
      <Footer />
    </>
  )
}
