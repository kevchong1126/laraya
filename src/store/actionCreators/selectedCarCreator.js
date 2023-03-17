import { SELECT_CAR, DELETE_CAR } from "../actionTypes/selectedCarTypes";

export const setCar = (make, model) => {
    
    return {
        type: SELECT_CAR,
        payload: `${make} ${model}`
    }
}

export const deleteCar = () => {
    
    return {
        type: DELETE_CAR
    }
}