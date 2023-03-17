import React from 'react'
import style from './Hamburger.module.scss'

const Hamburger = ({close, closeHandler}) => {
  return (
    <div className={`${style.hamburgerContainer} ${close ? style.close : ''}`} onClick={() => closeHandler(last => !last)}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
    </div>
  )
}

export default Hamburger