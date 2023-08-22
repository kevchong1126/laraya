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

const title1 = 'Synthetic oil';
const text1 = 'Pennzoil full synthetic oil ensures engine protection against wear and tear, improving fuel efficiency and performance.';
const title2 = 'Best results';
const text2 = 'Pennzoil Platinum® keeps pistons 30% cleaner than the tests required by the most rigorous institutions';
const title3 = 'Our purpose';
const text3 = 'Taking care of your engine and extending its life is what Pennzoil Motor Oils are all about. They are premium quality lubricants, trusted and recommended by professionals in the automotive industry around the world.';

//const text4 = 'Los aceites Pennzoil tienen agentes de limpieza del motor para ayudar a prevenir la acumulación de sedimentos dañinos. Como aceites sintéticos, los aceites Pennzoil son mejores para mantener su motor limpio que los aceites convencionales o las mezclas de aceites sintéticos y convencionales. Los contaminantes son producidos por el proceso de combustión, en forma de partículas de carbón, además de ácidos nítrico y sulfúrico.';

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
            Pennzoil oils have engine cleaning agents to help prevent harmful sludge buildup. As synthetic oils, Pennzoil oils are better at keeping your engine clean than conventional oils or blends of conventional and synthetic oils. Pollutants are produced by the combustion process, in the form of carbon particles, as well as nitric and sulfuric acid.
            </p>


            <div className={style.center}>
              <h2 className={style.recommended}>Recommended Product</h2>
              <SingleProduct product={pennzoilProd}/>
            </div>

      </div>
    </div>
  )
}

export default Pennzoil