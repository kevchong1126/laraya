import React, { useEffect, useState } from 'react'
import style from './Modal.module.scss'
import { createPortal } from 'react-dom'

import {dummy, model} from '../../data/selectCar'
import CustomSelect from './CustomSelect'

import { useDispatch } from 'react-redux'
import { setCar, deleteCar } from '../../store/actionCreators/selectedCarCreator'

const Modal = ({ isClicked, clickHandler }) => {
    const dispatch = useDispatch();
    const car = JSON.parse(localStorage.getItem('selectedCar'))
    const [selectedMake, setSelectedMake] = useState('Make');
    const [selectedModel, setSelectedModel] = useState('Model');
    
   
    const addHandler = () => {
        dispatch(setCar(selectedMake, selectedModel))

        clickHandler(false);
    }

    const deleteJSONHandler = () => {
        dispatch(deleteCar())

        clickHandler(false);
    }

    const setCurrMake = useState(false)[1];
    const setCurrModel = useState(false)[1];

    useEffect( () => {

        if (car){
            const currCar = car.split(' ');
            setCurrMake(currCar[0]);
            setCurrModel(currCar[1]);
        }

    }, [isClicked, car, setCurrMake, setCurrModel])

  return createPortal(
    <>
        <div className={style.modalOverlay} onClick={ () => clickHandler(false)}></div>
        <div className={style.card}>
            <div className={style.header}>
                <p className={style.text}>
                    SELECT A CAR
                </p>
                <p className={style.close} onClick={ () => clickHandler(false)}>X</p>
            </div>

            <div className={style.body}>
                <CustomSelect value={selectedMake} onSelectMake={setSelectedMake} onSelectModel={setSelectedModel} makes={dummy} />
                <CustomSelect value={selectedModel} onSelectModel={setSelectedModel} models={model[selectedMake] || false}/>
            </div>

            <div className={style.save}>
                <button className={` ${selectedMake !== 'Marca' && selectedModel !== 'Modelo' ? style.saveBtn : style.disabledBtn}`} onClick={addHandler}>
                    ADD CAR
                </button>
            </div>

            {
                car && 
                <div className={style.deleteCar}>
                    <p className={style.or}> OR </p>
                    <button className={style.delete} onClick={deleteJSONHandler}> DELETE {car} </button>
                </div>
            }
        </div>
    </>,
    document.getElementById('carModal')
  )
}

export default Modal