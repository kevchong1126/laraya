import React from 'react'
import style from './CartHeader.module.scss'

import { BsFillCartFill } from "react-icons/bs";

const CartHeader = () => {
  return (
    <div className={style.container}>
        <div className={style.header}>
            <h1 className={style.title}>
                Mi <span className={style.highlight}>Carrito</span>
            </h1>
            <BsFillCartFill className={style.icon}/>
        </div>
    </div>
  )
}

export default CartHeader
