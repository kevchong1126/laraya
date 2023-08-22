import React from 'react'
import Banners from '../components/Hero/Banners'
import ProductSlider from '../components/ProductSlider/ProductSlider';
import Category from '../components/Category/Category';
import ContactBanner from '../components/Contact/ContactBanner';
import TrustedBrands from '../components/TrustedBrands/TrustedBrands';

import products from '../data/popularProducts.json'
import essentials from '../data/essentials.json'
import safety from '../data/saf.json'

const Home = () => {

  return (
    <>
      <Banners />
      <ProductSlider title={'Most '} highlight={'Searched'} products={products}/>
      <Category />
      <ContactBanner />
      <ProductSlider title={'The '} highlight={'Essential'} products={essentials}/>
      <ProductSlider title={'Protection '} highlight={'For You'} products={safety} />
      <TrustedBrands />
    </>
  )
}

export default Home