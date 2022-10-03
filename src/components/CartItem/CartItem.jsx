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
                <p className='unit-price'>${props.uPrice}</p>
                <p>x</p>
                <p className='unit-count'>{props.quantity}</p>
                <div className='counted-price'>${props.uPrice * props.quantity}</div>
            </div>
        </div>
        <img src={iconDelete} alt="" className='bin' />
    </div>
  )
}

export default CartItem


// <div className="cart-item-text">
//             <p>Fall Limited Edition Sneakers</p>
//             <div>
//                 <p className='unit-price'>$125.00</p>
//                 <p>x</p>
//                 <p className='unit-count'>3</p>
//                 <div className='counted-price'>$375.00</div>
//             </div>
//         </div>