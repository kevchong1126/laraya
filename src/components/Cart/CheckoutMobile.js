import React from 'react'
import style from './CheckoutMobile.module.scss'

import { useSelector } from 'react-redux'

const CheckoutMobile = () => {
  const { itemsAmount } = useSelector(el => el.cartItems);

  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.btnContainer}>
                <a className={style.checkoutBtn}  href="https://api.whatsapp.com/send?phone=61420781" target='_blank' rel="noreferrer">
                    Cotizar en Whatsapp
                </a>
            </div>

            <div className={style.cartInfo}>
                <p className={style.itemQty}>{itemsAmount} ITEM(S)</p>
            </div>
        </div>
    </div>
  )
}

export default CheckoutMobile