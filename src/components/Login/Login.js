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
                <input type='text' placeholder='Username or Email' className={style.inputForm} />

                <input type='password' placeholder='Password' className={style.inputForm} />

                <button className={style.loginBtn}>
                    Temporarily Unavailable
                </button>

                <div className={style.methods}>
                    <button className={style.method}>Forgot your password?</button>
                    <button className={style.method}>Register</button>
                </div>
            </div>

            <div className={style.footer}>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
        </div>
    </div>
  )
}

export default Login