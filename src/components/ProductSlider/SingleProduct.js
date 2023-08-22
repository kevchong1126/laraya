import React from 'react'
import style from './SingleProduct.module.scss'

import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const { img, descripcion,  properties} = product;
    const { DIMENSIONS, BRAND, } = properties;

  return (
    <Link className={style.container} to={`/prod/${properties['PART#']}`}> 
        <div className={style.content}>
            <div className={style.imgContainer}>
                <img alt={descripcion} src={process.env.PUBLIC_URL + img} className={style.img}></img>
            </div>
            <div className={style.textContainer}>
                <h4 className={style.brand}>{BRAND}</h4>
                <p className={style.title}>{descripcion} </p>
                <span className={style.size}>{DIMENSIONS ? DIMENSIONS : ''}</span>
            </div>
        </div>
    </Link>
  )
}

export default SingleProduct