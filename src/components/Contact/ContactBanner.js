import React from 'react'
import style from './ContactBanner.module.scss'
import { FaWhatsapp } from "react-icons/fa"
import { GoLocation } from "react-icons/go";
const ContactBanner = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.text}>
                <h3 className={style.header}>Contact Us:</h3>
            </div>

            <div className={style.contactContainer}>
                <a className={`${style.link} ${style.whatsapp}`} href={'https://api.whatsapp.com/send?phone=+506%202219-9367&text=Me+gustar%C3%ADa+m%C3%A1s+informaci%C3%B3n'} target='blank'>
                    <FaWhatsapp className={style.icon} />
                </a>

                <a className={`${style.link} ${style.location}`} href={'location'}>
                    <GoLocation className={style.icon}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactBanner