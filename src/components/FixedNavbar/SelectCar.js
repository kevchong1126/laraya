import React, { useState } from 'react'
import style from './SelectCar.module.scss'
import Modal from './Modal'

import vehicle from '../../img/addVehicle.svg'

export const SelectCar = () => {
  const car = JSON.parse(localStorage.getItem('selectedCar'));

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={style.selectContainer}>
        <div className={style.selectContent} onClick={() => setIsClicked(true)}>
            <img className={style.icon} alt='car' src={vehicle} /> 
              {
                car ? 
                <p className={style.selectedCar}> {car} </p> :
                <p className={style.text}> Select Car </p>
              }
        </div>
        {
          isClicked && <Modal isClicked={isClicked} clickHandler={setIsClicked}/>
        }
    </div>
  )
}

export default SelectCar
