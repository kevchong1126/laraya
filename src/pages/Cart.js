import React from 'react'
import style from './Cart.module.scss'

import CheckoutMobile from '../components/Cart/CheckoutMobile'
import CartHeader from '../components/Cart/CartHeader'
import CartCards from '../components/Cart/CartCards'
import CheckoutDesktop from '../components/Cart/CheckoutDesktop'

const Cart = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <CartHeader />

            <div className={style.row}>
                <div className={style.left}>
                    <CartCards />
                </div>

                <div className={style.right}>
                    <CheckoutMobile />
                    <CheckoutDesktop />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cart