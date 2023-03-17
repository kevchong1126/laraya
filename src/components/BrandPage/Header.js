import React from 'react'
import style from './Header.module.scss'

const BrandPage = ({img, title}) => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <img className={style.img} src={img} alt={title} />
        </div>
    </div>
  )
}

export default BrandPage