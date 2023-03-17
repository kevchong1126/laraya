import React from 'react'
import style from './ProductSlider.module.scss'
import Slider from "react-slick";
import SingleProduct from './SingleProduct';

const ProductSlider = ({products, title, highlight}) => {
  const settings = {
    variableWidth: true,
    arrows: true,
    infinite: true
  };

  return (
    <div className={style.container}>
      <div className={style.content}>

        <div className={style.titleSection}>
          <h2 className={style.title}>{title}<span className={style.highlight}>{highlight}</span></h2> 
        </div>

        <Slider {...settings} className={style.slider}>
          {
            products.map( (product,idx) => <SingleProduct product={product} key={idx}/>)
          }
        </Slider>

      </div>
    </div>
  )
}

export default ProductSlider