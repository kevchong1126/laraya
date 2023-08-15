import React, { useState } from 'react'
import style from './Product.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { ADD } from '../../store/actionCreators/cartItemsCreator'

import { useParams, Link } from 'react-router-dom';

import db from '../../data/db.json'

import ErrorComp from '../Error/ErrorComp';
const Product = () => {
    const dispatch = useDispatch();
    const { products } = useSelector( el => el.cartItems);
    const { pathID } = useParams();
    const currProd = db.find(el => el.id === pathID) || '';
    const { descripcion, img, properties, id} = currProd || ''; 
    const cartProd = products.find( el => el.id === id);
    const [qty, setQty] = useState(cartProd ? cartProd.qty : 1);

    const addToCart = () => {
        dispatch(ADD(currProd, 1))
    }

    const renderProd = () => {
        if (!currProd){
            return <ErrorComp />
        }

        return (<>
                    <div className={style.imgContainer}>
                        <img src={process.env.PUBLIC_URL + img} alt={descripcion}>
                        </img>
                    </div>

                    <div className={style.productInfo}>
                        <h2 className={style.title}>{descripcion}</h2>

                        <div className={style.qtyContainer}>
                            <p className={style.counter}>{qty}</p> 
                        </div>

                        <ul className={style.properties}>
                            {
                                properties && Object.entries(properties).map( (property, idx) => {
                                    return  <li className={style.property} key={idx}>
                                            {property[0].toUpperCase()} : {property[1]}
                                            </li>
                                })
                            }
                        </ul>
                        <div className={style.btnContainer}>
                            {
                                cartProd ? 
                                <Link className={style.updateCart} to='/cart'>Go to Cart</Link> :
                                <button className={style.addToCart} onClick={addToCart}>Add to Cart</button>
                            }
                        </div>
                    </div>
                </>
        )
    }

  return (
    <div className={style.container}>
        <div className={style.content}>
            {renderProd()}
        </div>
    </div>
  )
}

export default Product