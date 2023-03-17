import React from 'react'
import style from './Pennzoil.module.scss'
import Header from '../components/BrandPage/Header'
import CardLeft from '../components/BrandPage/CardLeft'
import CardRight from '../components/BrandPage/CardRight'
import TextLeft from '../components/BrandPage/TextLeft'
import SingleProduct from '../components/ProductSlider/SingleProduct'

import pennzoilLogo from '../img/brandPromo/pennzoilLogo.jpg'
import img1 from '../img/brandPromo/pennzoil1.png'
import img2 from '../img/brandPromo/pennzoil2.png'
import img3 from '../img/brandPromo/pennzoil3.jpg'

const title1 = 'Aceite Sintetico';
const text1 = 'El aceite full sintetico de Pennzoil se asegura de la proteccion del motor contra el uso y desgaste, mejorando la eficiencia del combustible y rendimiento';
const title2 = 'Mejores Resultados';
const text2 = 'Pennzoil Platinum® mantiene los pistones 30% mas limpios que los tests requeridos por las instituciones mas rigurosas';
const title3 = 'Nuestro Proposito';
const text3 = 'Cuidar su motor y prolongar su vida útil es de lo que se tratan los aceites Pennzoil Motor. Son lubricantes de primera calidad, confiables y recomendados por profesionales de la industria automotriz en todo el mundo.';

const text4 = 'Los aceites Pennzoil tienen agentes de limpieza del motor para ayudar a prevenir la acumulación de sedimentos dañinos. Como aceites sintéticos, los aceites Pennzoil son mejores para mantener su motor limpio que los aceites convencionales o las mezclas de aceites sintéticos y convencionales. Los contaminantes son producidos por el proceso de combustión, en forma de partículas de carbón, además de ácidos nítrico y sulfúrico.';

const pennzoilProd = { 
  img: '/productImg/pennzoil.png',
  descripcion: 'Pennzoil 20W50',
  id: 'ovjif',
  properties : {
    codigo: '20w50pen',
    marca: 'PENNZOIL',
    largo: 'GAL'
  }
  
}
const Pennzoil = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Header img={pennzoilLogo} title={'PENNZOIL'} />

            <div className={style.flex}>
                <CardLeft img={img1} text={text1} title={title1} />
                <CardRight img={img2} text={text2} title={title2} />
            </div>

            <TextLeft img={img3} title={title3} text={text3} />
            <p className={style.extraText}>
            Los aceites Pennzoil tienen agentes de limpieza del motor para ayudar a prevenir la acumulación de sedimentos dañinos. Como aceites sintéticos, los aceites Pennzoil son mejores para mantener su motor limpio que los aceites convencionales o las mezclas de aceites sintéticos y convencionales. Los contaminantes son producidos por el proceso de combustión, en forma de partículas de carbón, además de ácidos nítrico y sulfúrico.
            </p>


            <div className={style.center}>
              <h2 className={style.recommended}>Producto Recomendado</h2>
              <SingleProduct product={pennzoilProd}/>
            </div>

      </div>
    </div>
  )
}

export default Pennzoil