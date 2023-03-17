import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../actionTypes/cartItemsTypes";

export const ADD = (product, amount) => {
    return {
        type: ADD_ITEM,
        payload: {
            product,
            amount
        }
    }
}

export const UPDATE = (product, op) => {
    return {
        type: UPDATE_ITEM,
        payload: {
            product,
            op
        }
    }
}

export const DELETE = product => {
    return {
        type: DELETE_ITEM,
        payload: product
    }
}