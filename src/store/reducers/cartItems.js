import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actionTypes/cartItemsTypes'

const persistedState = localStorage.getItem('cartItems');

const initialState =  JSON.parse(persistedState) || {
    itemsAmount: 0,
    products: []
};

const cartItemsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_ITEM: {
            
            const { product, amount } = action.payload;
            let id = product.id;

            if (state.products.find(el => el.id === id)) return
            
            const newState = {
                itemsAmount: state.itemsAmount + amount,
                products: [
                    ...state.products, 
                    {
                    ...product,
                    qty: amount
                    }
                ]
            }

            localStorage.setItem('cartItems', JSON.stringify(newState));

            return newState
        }
            
        case UPDATE_ITEM:{
            const { product, op } = action.payload;
            let { id } = product;
            const currProd = state.products.find( el => el.id === id);

            op === 'increase' ? currProd.qty = currProd.qty + 1 : currProd.qty = currProd.qty - 1;

            const newState = {
                ...state,
                itemsAmount: op === 'increase' ? state.itemsAmount + 1 : state.itemsAmount - 1,
            }

            localStorage.setItem('cartItems', JSON.stringify(newState));

            return newState 
        }
            
        case DELETE_ITEM:{

                const { id } = action.payload;
                const currProd = state.products.find( el => el.id === id);

                const newState = {
                    itemsAmount: state.itemsAmount - currProd.qty,
                    products: [
                        ...state.products.filter(el => el.id !== id)
                    ]
                }

                localStorage.setItem('cartItems', JSON.stringify(newState));

                return newState
        }

        default:
            return state
    }
}

export default cartItemsReducer