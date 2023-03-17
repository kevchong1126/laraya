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

const title1 = 'Conocidos por varias decadas';
const text1 = 'Peak no solo establece el estándar para productos y servicios premium. Lo levantamos. La innovación incesante ha estado en el corazón de nuestra empresa desde 1866.Desde lubricantes de vanguardia hasta el mejor mantenimiento automotriz de su clase, hacemos un esfuerzo adicional para que su automóvil también pueda hacerlo.';
const text2 = 'Desde su fundación, PEAK™ y sus científicos han estado innovando, creando y reinventando fórmulas para aceites de motor de carreras, de alto kilometraje, sintéticos y reciclados. Es este compromiso con la innovación lo que se muestra en nuestros productos que ayudan a que los vehículos circulen con seguridad por las carreteras de todo el mundo.';
const title3 = 'Temperaturas Extremas';
const text3 = 'El anticongelante, o refrigerante del motor, es un líquido coloreado que se mezcla con agua para ayudar a regular el motor durante temperaturas extremas.';
const title4 = 'Mayor Uso';
const text4 = 'Protección anticorrosión para todos los metales y aleaciones utilizadas en el sistema de refrigeración de los vehículos modernos.';

const Coolant = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Header img={coolantLogo} />

            <TextLeft img={img1} title={title1} text={text1} />
            <p className={style.extraText}>
            Desde su fundación, PEAK™ y sus científicos han estado innovando, creando y reinventando fórmulas para aceites de motor de carreras, de alto kilometraje, sintéticos y reciclados. Es este compromiso con la innovación lo que se muestra en nuestros productos que ayudan a que los vehículos circulen con seguridad por las carreteras de todo el mundo.
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