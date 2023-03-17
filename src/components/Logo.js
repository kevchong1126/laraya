import React from 'react'
import style from './Logo.module.scss'

import logo from '../img/logo.png'

import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className={style.logoContainer}>
        <Link to='/laraya' className={style.logo}>
        <img className={style.logoImg} src={logo} alt='logo'></img>
        <h1 className={style.logoText}><span>La</span><span>Raya</span></h1>
        </Link>
    </div>
  )
}

export default Logo