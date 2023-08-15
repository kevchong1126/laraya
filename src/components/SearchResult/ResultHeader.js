import React, { useEffect, useState} from 'react'
import style from './ResultHeader.module.scss'

import { useParams } from 'react-router-dom'

import { AiOutlineCheckCircle } from "react-icons/ai";

import { useSelector } from 'react-redux';


const ResultHeader = () => {
    const [selectedCar, setSelectedCar] = useState(null)
    const car = useSelector( el => el.selectedCar)
    const { searchquery } = useParams();
    const newQuery = searchquery.split('-').join(' ');

  useEffect( () => {
      setSelectedCar(JSON.parse(localStorage.getItem('selectedCar')))
  }, [car])

  return (
    <div className={style.container}>
        <div className={style.content} onClick={ () => console.log(car, selectedCar)}>
            <h2 className={style.title}> Searching for ''<span className={style.italic}>{newQuery}</span>  ''</h2>
            {
              selectedCar && <p className={style.selectedCar}> <AiOutlineCheckCircle className={style.selectedIcon} /> SELECTED CAR: {selectedCar} </p>
            }
        </div>
    </div>
  )
}

export default ResultHeader