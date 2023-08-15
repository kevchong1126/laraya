import React from 'react'
import style from './CartCard.module.scss'

import { BsFillTrashFill } from "react-icons/bs";

import { useDispatch, useSelector } from 'react-redux'
import { DELETE, UPDATE } from '../../store/actionCreators/cartItemsCreator'

import { Link } from 'react-router-dom'

const CartCard = ({product}) => {
    const dispatch = useDispatch();
    const { descripcion, img, id } = product;
    const { qty } = useSelector(el => el.cartItems).products.find(el => el.id === id);

    const increaseQty = () => dispatch(UPDATE(product, 'increase'));
    
    const decreaseQty = () => {
        if (qty <= 1) return

        else dispatch(UPDATE(product, 'decrease'));
    }

    const removeItemHandler = () => {
        dispatch(DELETE(product));
    }


  return (
    <div className={style.container}>
        <div className={style.content}>

            <Link className={style.top} to={`/prod/${product.id}`}>
                <h3 className={style.title}>{descripcion}</h3>
                
                <div className={style.imgContainer}>
                    <img className={style.img} src={process.env.PUBLIC_URL + img} alt={descripcion} />
                </div>
            </Link>
            
            <ul className={style.propertiesContainer}>
                {
                    product.properties && (Object.entries(product.properties)).map( (product, idx) => {
                        return  <li className={style.property} key={idx}>
                                    {product[0].toUpperCase()} : {product[1]}
                                </li>
                    })
                }
            </ul>
            <div className={style.qtyContainer}>
                <button onClick={decreaseQty}>-</button>
                <p className={style.counter}>{qty}</p>
                <button onClick={increaseQty}>+</button>
            </div>

            <div className={style.removeItem}>
                <BsFillTrashFill className={style.trashIcon} onClick={removeItemHandler}/>
            </div>
        </div>
    </div>
  )
}

export default CartCard