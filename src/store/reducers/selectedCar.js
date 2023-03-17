import { SELECT_CAR, DELETE_CAR } from '../actionTypes/selectedCarTypes'
 
const persistedState = JSON.parse(localStorage.getItem('selectedCar')) || '';

const initialCar = {
    car : persistedState
};

const selectedCarReducer = (state=initialCar, action) => {
    switch (action.type){
        case SELECT_CAR: 
            localStorage.setItem('selectedCar', JSON.stringify(action.payload));

            return {
                car : action.payload
            }
            
        case DELETE_CAR:
            localStorage.setItem('selectedCar', JSON.stringify(''));

            return { car : '' }

        default:
            return { car : '' }
    }
}

export default selectedCarReducer