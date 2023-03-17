import React from 'react'
import style from './ProductPage.module.scss'

import Product from '../components/ProductId/Product'

const ProductPage = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Product />
        </div>
    </div>
  )
}

export default ProductPage