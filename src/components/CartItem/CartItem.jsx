import React from 'react'
import './cart-item.css'

import { iconDelete, } from "../../assets/assetsIndex";

const CartItem = (props) => {
  return (
    <div className='cart-item'>
        <img src={props.thumbnail} alt="" className='thumbnail' />
        <div className="cart-item-text">
            <p>{props.title}</p>
            <div>
                <p className='unit-price'>${parseFloat(props.uPrice * ((100 - props.discount) / 100)).toFixed(2)}</p>
                <p>x</p>
                <p className='unit-count'>{props.quantity}</p>
                <div className='counted-price'>${parseFloat(props.uPrice * ((100 - props.discount) / 100)).toFixed(2) * props.quantity}</div>
            </div>
        </div>
        <img src={iconDelete} alt="" className='bin' onClick={() => props.removeCartItem()} />
    </div>
  )
}

export default CartItem
