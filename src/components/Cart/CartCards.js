import React from 'react'
import CartCard from './CartCard'
import style from './CartCards.module.scss'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { BsCartFill } from "react-icons/bs";

const CartCards = () => {
    const { products } = useSelector(el => el.cartItems);

    return (
        <div className={style.container}>
            <div className={style.cards}>

                {
                products.length ? 

                products.map( el => <CartCard product={el} key={el.id} />) 

                :
                
                <div className={style.empyCart}>
                    <BsCartFill className={style.icon} />
                    <h1 className={style.emptyHeader}>
                        Ups! Tu carrito esta vacio
                    </h1>
                    <Link to='/' className={style.btn}>Regresar a Inicio</Link>
                </div>
                }
            </div>
        </div>
    )
}

export default CartCards