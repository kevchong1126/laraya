import React, { useState, useEffect} from 'react'
import style from './ResultInfo.module.scss'

const ResultInfo = () => {

  return (
    <div className={style.container}>

        <h4 className={style.categoryTitle}>Categorias Frecuentes</h4>
        
        <ul className={style.similarCategories}>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/PASTILLAS-DELANTERAS'>Pastillas Delanteras</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/DISCO-FRENO'>Discos de Frenos</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/ACEITE'>Aceites</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/ROTULA'>Rotulas</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/ESCOBILLA'>Escobillas</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/ROL'>Rol</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/RETENEDOR'>Retenedor</a>
            </li>
            <li className={style.category}>
                <a className={style.categoryLink} href='/searchresult/FILTRO'>Filtros</a>
            </li>
        </ul>


    </div>
  )
}

export default ResultInfo
