import { combineReducers } from "redux"

import selectedCar from './reducers/selectedCar'
import cartItems from './reducers/cartItems'

const reducers = combineReducers({
    selectedCar,
    cartItems
})

export default reducers