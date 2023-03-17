import React from 'react'
import style from './Login.module.scss'

import Logo from '../Logo'

const Login = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.header}>
                <Logo />
            </div>
            
            <div className={style.submitForm}>
                <input type='text' placeholder='Usario o E-mail' className={style.inputForm} />

                <input type='password' placeholder='Contraseña' className={style.inputForm} />

                <button className={style.loginBtn}>
                    Temporalmente Fuera de Servicio
                </button>

                <div className={style.methods}>
                    <button className={style.method}>Olvido La Contraseña?</button>
                    <button className={style.method}>Registrarse</button>
                </div>
            </div>

            <div className={style.footer}>
                Este sitio está protegido por reCAPTCHA y se aplican la Política de privacidad y los Términos de servicio de Google.
            </div>
        </div>
    </div>
  )
}

export default Login