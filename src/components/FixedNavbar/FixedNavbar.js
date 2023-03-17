import React, { useState, useEffect, useRef } from 'react'
import style from './FixedNavbar.module.scss'
import Search from './Search'
import SelectCar from './SelectCar'

import { BsFillCartFill } from "react-icons/bs"

import { Link, useLocation } from 'react-router-dom'

const FixedNavbar = () => {
  const { pathname } = useLocation();
  const [showBag, setShowBag] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [hideSticky, setHideSticky] = useState(false);
  const navbar = useRef();

  useEffect( () => {
    setHideSticky(false)
  }, [pathname]);
  
  useEffect( () => {
    let lastScroll = window.scrollY;

    function setStickyFunc(){
      if (window.scrollY >= 16*5) setIsSticky(true)
      else setIsSticky(false)

      if (window.scrollY >= 16*15){
        if (lastScroll < window.scrollY){
            setHideSticky(true)
        } 

        else setHideSticky(false)
      }

      lastScroll = window.scrollY
    }

    window.addEventListener('scroll', setStickyFunc);

    return () => window.removeEventListener('scroll', setStickyFunc)

  }, [isSticky]);

  useEffect(() => {
    const mediaMatch = window.matchMedia('(min-width: 850px)');
    
    if (mediaMatch.matches) setShowBag(true);
    else setShowBag(false)
    
    const checkWidth = () => {
      if (mediaMatch.matches) setShowBag(true);
      else setShowBag(false)
    }

    window.addEventListener('resize', checkWidth)

    return () => window.removeEventListener('resize', checkWidth)
  }, [isSticky]);

  return (
    <div ref={el => navbar.current = el} className={`${style.container} ${isSticky && style.sticky} ${hideSticky && style.hideSticky}`}>
        <div className={style.content}>
            <Search />
            <SelectCar />
            {
              showBag && isSticky && 
              <Link className={style.cartIcon} to='/cart'>
                <BsFillCartFill className={style.icon}/>
              </Link>
            }
        </div>
    </div>
  )
}

export default FixedNavbar