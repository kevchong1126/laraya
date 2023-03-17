import React, { useState, useEffect } from 'react'
import style from './TrustedBrands.module.scss'

import img1 from '../../img/brands/3m.png'
import img2 from '../../img/brands/bardahl.png'
import img3 from '../../img/brands/bosch.png'
import img4 from '../../img/brands/denso.png'
import img5 from '../../img/brands/flosser.png'
import img6 from '../../img/brands/monroe.png'
import img7 from '../../img/brands/ngk.png'
import img8 from '../../img/brands/pennzoil.png'
import img9 from '../../img/brands/wd40.png'

const initialState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
};

const TrustedBrands = () => {
    const [index, setIndex] = useState(1);

    const [show, setShow] = useState({
        1: true,
        2: false,
        3: false,
        4: true,
        5: false,
        6: false,
        7: true,
        8: false,
        9: false
    });

    useEffect( () => {
        setTimeout( () => {
            setShow({ ...initialState, [index] : true,  [index+3] : true,  [index+6] : true});
            if (index === 3) setIndex(1);
            else setIndex( index + 1);
        }, 3000);

    }, [index, show]);

  return (
    <div className={style.container}>   
        <div className={style.content}>
            <div className={style.header}>
                <h2 className={style.title}>Marcas de confianza</h2>
            </div>

            <div className={style.row}>
                <div className={style.col}>
                    <img className={`${style.img} ${show[1] && style.active}`} src={img1} alt='Brand'/>
                    <img className={`${style.img} ${show[2] && style.active}`} src={img2} alt='Brand'/> 
                    <img className={`${style.img} ${show[3] && style.active}`} src={img3} alt='Brand'/>  
                </div>

                <div className={style.col}>
                    <img className={`${style.img} ${show[4] && style.active} ${style.delay1}`} src={img4} alt='Brand'/>
                    <img className={`${style.img} ${show[5] && style.active} ${style.delay1}`} src={img5} alt='Brand'/> 
                    <img className={`${style.img} ${show[6] && style.active} ${style.delay1}`} src={img6} alt='Brand'/>
                </div>

                <div className={style.col}>
                    <img className={`${style.img} ${show[7] && style.active} ${style.delay2}`} src={img7} alt='Brand'/>
                    <img className={`${style.img} ${show[8] && style.active} ${style.delay2}`} src={img8} alt='Brand'/> 
                    <img className={`${style.img} ${show[9] && style.active} ${style.delay2}`} src={img9} alt='Brand'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TrustedBrands