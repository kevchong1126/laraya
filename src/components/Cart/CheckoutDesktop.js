import React from 'react'
import style from './CheckoutDesktop.module.scss'

import { useSelector} from 'react-redux'

const CheckoutDesktop = () => {
    const { itemsAmount } = useSelector( state => state.cartItems);

  return (
    <div className={style.container}>
        <div className={style.content}>

            <div className={style.header}>
                <h3 className={style.summary}>Order Summary</h3>
            </div>

            <div className={style.center}>
                <div className={style.totalProductsContainer}>
                    <p className={style.info}>Total Products</p>
                    <p className={style.products}>{itemsAmount} ITEM(S)</p>
                </div>
            </div>
            
            <div className={style.btnContainer}>
                <a className={style.checkoutBtn}  href="https://api.whatsapp.com/send?phone=61420781" target='_blank' rel="noreferrer">
                    Send message
                </a>
            </div>

        </div>
    </div>
  )
}

export default CheckoutDesktop