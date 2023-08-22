import React from 'react'
import style from './Banners.module.scss'
import Banner from './Banner'

import wipers from '../../img/wipers.png'
import rims from '../../img/rims.png'
import oil from '../../img/oil.png'
import coolant from '../../img/coolant.webp'

const Banners = () => {

  return (
    <div className={style.container}>
        <div className={style.content}>
            <Banner className={'a'} source={wipers} link={'/bosch'} text={'QUALITY'} highlight={'WINDSHIELD WIPERS'}/>
            <Banner className={'b'} source={rims} link={'/searchresult/TOOL'} text={'BEST'} highlight={'ACCESORIES'} />
            <Banner className={'c'} source={oil} link={'/pennzoil'} text={'BEST'} highlight={'LUBRICATION'} />
            <Banner className={'d'} source={coolant} link={'/coolant'} text={'COOL'} highlight={'YOUR ENGINE'} />
        </div>
    </div>
  )
}

export default Banners