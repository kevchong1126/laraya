import React from 'react'
import style from './Coolant.module.scss'
import Header from '../components/BrandPage/Header'
import CardLeft from '../components/BrandPage/CardLeft'
import CardRight from '../components/BrandPage/CardRight'
import TextLeft from '../components/BrandPage/TextLeft'
import coolantLogo from '../img/brandPromo/coolantLogo.jpg'
import img1 from '../img/brandPromo/coolant1.png'
import img3 from '../img/brandPromo/coolant3.jpg'
import img4 from '../img/brandPromo/coolant4.jpg'

const title1 = 'Known for several decades';
const text1 = 'Peak does not just set the standard for premium products and services. We lift it up. Relentless innovation has been at the heart of our company since 1866. From cutting-edge lubricants to best-in-class auto maintenance, we go the extra mile so your car can too.';
//const text2 = 'Since its founding, PEAK™ and its scientists have been innovating, creating and reinventing formulas for racing, high mileage, synthetic and recycled motor oils. It's this commitment to innovation that shows in our products that help keep vehicles moving safely on roads around the world.';
const title3 = 'Extreme temperatures';
const text3 = 'Antifreeze, or engine coolant, is a colored liquid that mixes with water to help regulate the engine during extreme temperatures.';
const title4 = 'Increased Use';
const text4 = 'Corrosion protection for all metals and alloys used in the cooling system of modern vehicles.';

const Coolant = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Header img={coolantLogo} />

            <TextLeft img={img1} title={title1} text={text1} />
            <p className={style.extraText}>
              Since its founding, PEAK™ and its scientists have been innovating, creating and reinventing formulas for racing, high mileage, synthetic and recycled motor oils. It's this commitment to innovation that shows in our products that help keep vehicles moving safely on roads around the world.
            </p>
            
            <div className={style.flex}>
                <CardLeft img={img3} title={title3} text={text3} /> 
                <CardRight img={img4} title={title4} text={text4} />
            </div>
        </div>
    </div>
  )
}

export default Coolant