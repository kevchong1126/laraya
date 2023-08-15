import React, { useState, useEffect } from 'react'
import style from './Navbar.module.scss'
import NavbarMobile from './NavbarMobile'
import Hamburger from './Hamburger'
import Logo from '../Logo'

import { BsFillCartFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"

import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation();
  const [close, setClose] = useState(false);
  
  useEffect( () => {
    if (close) document.body.style.overflow = 'hidden'; 
    else document.body.style.overflow = 'visible'; 

  }, [close]);

  useEffect( () => {
    setClose(false)
  },[pathname])
  
  return (
    <div className={style.navbarContainer}>

      <div className={style.navbarContent}>

        <Logo />
        
        <div className={style.right}>

          <div className={style.btns}>
              <Link className={style.btnLink} to='/laraya'>
                <AiFillHome className={style.icon}/>
                <p>Home</p>
              </Link>

              <Link className={style.btnLink} to='/login'>
                <FaUserAlt className={style.icon}/>
                <p>Login</p>
              </Link>

              <Link className={style.btnLink} to='/cart'>
                <BsFillCartFill className={style.icon}/>
                <p>Cart</p>
              </Link>
          </div>
        </div>

        <Hamburger close={close} closeHandler={setClose} />

        <NavbarMobile close={close} />
      </div>
    </div>
  )
}

export default Navbar