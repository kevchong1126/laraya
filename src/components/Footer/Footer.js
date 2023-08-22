import React from 'react'
import style from './Footer.module.scss'
import Logo from '../Logo'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>

      <div className={style.row}>

        <div className={style.col}>
          <div className={style.header}><Logo /></div>
          <div className={style.about}>
            In La Raya Auto Parts, you will find the largest variety of Spare Parts. Our goal is to provide our customers with the best support and the best quality, always at the best price.
          </div>
        </div>
        
        <div className={style.col}>
          <div className={style.header}>Frequent Links</div>
          
          <ul className={style.list}>
            <li className={style.listItem}>
              <Link className={style.link} to='/laraya'>Home</Link>
            </li>
            <li className={style.listItem}>
              <Link className={style.link} to='/bosch'>Windshield Wipers</Link>
            </li>
            <li className={style.listItem}>
              <Link className={style.link} to='/pennzoil'>Oil</Link>
            </li>
          </ul>
        </div>

        <div className={style.col}>
          <div className={style.header}>Contact Information</div>

          <ul className={style.list}>
            <li className={style.listItem}>
            2219 10th St
            </li>
            <li className={style.listItem}>
            Great Bend, KS 67530
            </li>
            <li className={style.listItem}>
              Phone: 2219 - 9367
            </li>
            <li className={style.listItem}>
              Whatsapp: 6142 - 0781
            </li>
          </ul>  
        </div>
      </div>
      
      <div className={style.copyrightContainer}>
        <div className={style.copyrightContent}>
          © 2022 Auto Parts La Raya LCC || Ecommerce
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer