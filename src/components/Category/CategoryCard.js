import React from 'react'
import style from './CategoryCard.module.scss'

import { Link } from 'react-router-dom';

const CategoryCard = ({card}) => {
    const {title, img, url} = card;

  return (
    <Link to={`/searchresult/${url}`} className={style.cardContainer}>
        <div className={style.imgContainer}>
            <img className={style.img} alt={title} src={img} />
        </div>

        <div className={style.titleContainer}>
            <h5 className={style.title}>{title}</h5>
        </div>
    </Link>
  )
}

export default CategoryCard