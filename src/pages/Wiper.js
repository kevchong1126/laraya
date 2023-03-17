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

const title1 = 'Mejor Claridad';
const text1 = 'Sabemos que manejar en la lluvia es dificil, especialmente en las noches. Bosch FOCUS™ ofrece optima claridad en la noche e incrementa la seguridad al manejar';
const title2 = 'Multiproposito';
const text2 = 'Curva patentada de Bosch CLEAR™ que permite una buena limpiza en las mayorias de los climas';
const title3 = 'Nuevo Diseño';
const text3 = 'El diseño patentado de Bosch EVOLUTION™ ofrece una limpieza que distribuye uniformemente la presion sobre toda la escobilla';
const title4 = 'Historia de Bosch';
const text4 = 'En 1886, Robert Bosch fundó el "Taller de mecánica de precisión e ingeniería eléctrica ​​en Stuttgart. Este fue el nacimiento de la compañía que opera globalmente en la actualidad. Desde sus inicios se caracterizó por la fuerza innovadora y el compromiso social.';
const title5 = 'Estandar de Alta Calidad';
const text5 = 'Precio competitivo con una eficiencia y seguridad maxima para el conductor';
const title6 = 'Instalacion Facil';
const text6 = 'Las escobillas Bosch vienen con adaptadores pre-ensamblados que permiten una instalacion eficaz y rapida';
const title7 = 'Estructura Robusta para Mejor Estabilidad';
const text7 = 'Las escobillas de estructura metalica vienen incluidos con doble proteccion ante la corrosion';

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
              <h3 className={style.perksTitle}>Beneficios de Usar Bosch</h3>

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