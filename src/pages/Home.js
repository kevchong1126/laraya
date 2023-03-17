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
      <ProductSlider title={'Lo Mas '} highlight={'Popular'} products={products}/>
      <Category />
      <ContactBanner />
      <ProductSlider title={'Los '} highlight={'Esenciales'} products={essentials}/>
      <ProductSlider title={'Proteccion '} highlight={'Para Usted'} products={safety} />
      <TrustedBrands />
    </>
  )
}

export default Home