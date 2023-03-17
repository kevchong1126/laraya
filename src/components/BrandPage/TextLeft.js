import React from 'react'
import style from './TextLeft.module.scss'

const TextLeft = ({title, text, img}) => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.textContainer}>
                {
                    title &&
                    <h3 className={style.title}>
                        { title }
                    </h3>
                }
                
                <p className={style.text}>
                    { text }
                </p>
            </div>

            {
                img && 
                <div className={style.imgContainer}>
                    <img src={img} alt={title} />
                </div>
            }
        </div>
    </div>
  )
}

export default TextLeft