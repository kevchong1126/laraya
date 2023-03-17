import React from 'react'
import style from './ErrorComp.module.scss'

import notFound from '../../img/notfound.jpg'

const ErrorComp = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <img className={style.notFoundImg} src={notFound} alt='Not Found'/>
        </div>
    </div>
  )
}

export default ErrorComp