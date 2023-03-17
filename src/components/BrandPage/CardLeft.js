import React from 'react'
import style from './CardLeft.module.scss'

const DataLeft = ({img, text, title}) => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.left}>
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
            
            <div className={style.right}>
                <div className={style.imgContainer}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataLeft