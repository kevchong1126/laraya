import React from 'react'
import style from './CardUp.module.scss'

const CardUp = ({img, title, text}) => {
  return (
    <div className={style.container}>
        <div className={style.content}>

            <div className={style.up}>
                <div className={style.imgContainer}>
                    <img src={img} alt={title} />
                </div>
            </div>

            <div className={style.down}>
                {
                    title && 
                    <h3 className={style.title}>
                        {title}
                    </h3>
                }
                <div className={style.data}>
                    <p className={style.text}>
                        {text}
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CardUp