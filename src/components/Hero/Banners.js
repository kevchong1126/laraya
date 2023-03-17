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
            <Banner className={'a'} source={wipers} link={'/bosch'} text={'ESCOBILLAS DE'} highlight={'ALTA CALIDAD'}/>
            <Banner className={'b'} source={rims} link={'/searchresult/ACCESORIOS'} text={'LOS MEJORES'} highlight={'ACCESORIOS'} />
            <Banner className={'c'} source={oil} link={'/pennzoil'} text={'MEJOR'} highlight={'LUBRICACIÓN'} />
            <Banner className={'d'} source={coolant} link={'/coolant'} text={'ENFRÍA'} highlight={'TU MOTOR'} />
        </div>
    </div>
  )
}

export default Banners