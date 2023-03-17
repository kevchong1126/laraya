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
            En Repuestos Gigante, encontrará la mayor variedad de Repuestos. Nuestro objetivo es de brindarle a nuestros clientes el mejor respaldo y la mejor calidad, siempre al mejor precio.
          </div>
        </div>
        
        <div className={style.col}>
          <div className={style.header}> Links Frecuentes</div>
          
          <ul className={style.list}>
            <li className={style.listItem}>
              <Link className={style.link} to='/laraya'>Inicio</Link>
            </li>
            <li className={style.listItem}>
              <Link className={style.link} to='/bosch'>Escobillas</Link>
            </li>
            <li className={style.listItem}>
              <Link className={style.link} to='/pennzoil'>Aceites</Link>
            </li>
          </ul>
        </div>

        <div className={style.col}>
          <div className={style.header}>Informacion de Contacto</div>

          <ul className={style.list}>
            <li className={style.listItem}>
              100m Sur de la Clinica Marcial Fallas, Frente a Ekono
            </li>
            <li className={style.listItem}>
              Desamparados, San Jose
            </li>
            <li className={style.listItem}>
              Tel: 2219 - 9367
            </li>
            <li className={style.listItem}>
              Whatsapp: 6142 - 0781
            </li>
          </ul>  
        </div>
      </div>
      
      <div className={style.copyrightContainer}>
        <div className={style.copyrightContent}>
          © 2022 Auto Repuestos La Raya S.A ||  Pulperos profesionales
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer