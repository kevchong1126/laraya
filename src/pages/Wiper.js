import React from 'react'
import style from './Wiper.module.scss'

import Header from '../components/BrandPage/Header'
import CardLeft from '../components/BrandPage/CardLeft'
import CardRight from '../components/BrandPage/CardRight'
import TextLeft from '../components/BrandPage/TextLeft'
import CardUp from '../components/BrandPage/CardUp'

import imgLogo from '../img/brandPromo/boschLogo.jpg'
import img1 from '../img/brandPromo/bosch1.png'
import img2 from '../img/brandPromo/bosch2.png'
import img3 from '../img/brandPromo/bosch3.png'
import img4 from '../img/brandPromo/bosch4.webp'
import img5 from '../img/brandPromo/bosch5.jpg'
import img6 from '../img/brandPromo/bosch6.jpg'
import img7 from '../img/brandPromo/bosch7.jpg'

const title1 = 'Better visibility';
const text1 = 'We know that driving in the rain is difficult, especially at night. Bosch FOCUS™ offers optimum clarity at night and increases driving safety';
const title2 = 'Multipurpose';
const text2 = 'Bosch CLEAR™ patented curve for good cleaning in most climates';
const title3 = 'New Design';
const text3 = 'Boschs patented EVOLUTION™ design provides cleaning that evenly distributes pressure over the entire blade';
const title4 = 'Bosch History';
const text4 = 'In 1886, Robert Bosch founded the "Workshop for Precision Mechanics and Electrical Engineering in Stuttgart. This was the birth of the company that operates globally today. From its inception it was characterized by innovative strength and social commitment.';
const title5 = 'Estandar de Alta Calidad';
const text5 = 'Competitive price with maximum efficiency and safety for the driver';
const title6 = 'Easy Installation';
const text6 = 'Bosch wiper blades come with pre-assembled adapters that allow for quick and efficient installation.';
const title7 = 'Robust Structure for Better Stability';
const text7 = 'The metallic structure brushes are included with double protection against corrosion';

const Wiper = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Header img={imgLogo} title='BOSCH'/>

            <div className={style.flex}>
                <CardLeft img={img1} text={text1} title={title1} />
                <CardRight img={img2} text={text2} title={title2} />
                <CardLeft img={img3} text={text3} title={title3} />  
            </div>
            
            <TextLeft img={img4} text={text4} title={title4} />

            <div className={style.perksContainer}>
              <h3 className={style.perksTitle}>Benefits of Using Bosch</h3>

               <div className={style.flex}>
                <CardUp img={img5} text={text5} title={title5}/>
                <CardUp img={img6} text={text6} title={title6}/>
                <CardUp img={img7} text={text7} title={title7}/>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default Wiper