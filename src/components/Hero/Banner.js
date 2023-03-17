import React from 'react'
import style from './Banner.module.scss'

import { Link } from 'react-router-dom'

const Banner = ({source, link, className, text, highlight}) => {
  
  const styles = (className) => {
    switch(className) {
      case 'a':
        return style.a
      case 'b':
        return style.b
      case 'c':
        return style.c
      case 'd':
        return style.d
      default:
        return ''
    }
  }

  return (
    <Link className={`${style.container} ${styles(className)}`} to={link}>
        <div className={style.content}>
            <div className={style.textContent}>
              <p className={style.text}>
                {text}
              </p>
              <p className={style.highlight}>
                {highlight}
              </p> 
            </div>
        </div>
        <div className={style.bg}>
            <img className={style.bgImg} src={source} alt='auto part'></img>
        </div>
    </Link>
  )
}

export default Banner