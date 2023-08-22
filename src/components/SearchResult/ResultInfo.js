import React from 'react'
import style from './ResultInfo.module.scss'
import { Link } from 'react-router-dom'
const ResultInfo = () => {

  return (
    <div className={style.container}>

        <h4 className={style.categoryTitle}>Frequent Categories</h4>
        
        <ul className={style.similarCategories}>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/BRAKE-PAD'>Brake Pads</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/BRAKE-ROTOR'>Brake Rotors</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/OIL'>Oil</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/BUSHING'>Bushings</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/WIPER'>Windshield Wiper</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/BEARING'>Bearing</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/OIL SEAL'>Oil Seal</Link>
            </li>
            <li className={style.category}>
                <Link className={style.categoryLink} to='/searchresult/FILTER'>Filters</Link>
            </li>
        </ul>


    </div>
  )
}

export default ResultInfo
