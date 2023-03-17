import React from 'react'
import style from './Category.module.scss'
import CategoryCard from './CategoryCard'

import { categories } from '../../data/categories'

const Category = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>

            <div className={style.titleContainer}>
                <h2 className={style.title}>Categorias Populares</h2>
            </div>

            <div className={style.categoryWrapper}>
                {
                    categories.map( (el, idx) => 
                        <CategoryCard card={el} key={idx}/>
                    )
                }
            </div>
            
        </div>
    </div>
  )
}

export default Category