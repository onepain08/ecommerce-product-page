import { AnimatePresence } from 'framer-motion'
import React from 'react'
import './product-card.css'

import { Btn } from "../componentsIndex";
import { iconCart, iconMinus, iconPlus } from '../../assets/assetsIndex';

const ProductCard = (props) => {


    // const [userItemQuantity, setUserItemQuantity] = React.useState(0)


    // function subtractQuantity(){
    //     setUserItemQuantity(prevUserItemQuantity => prevUserItemQuantity > 0 ? prevUserItemQuantity - 1: prevUserItemQuantity)
    // }

    // function addQuantity(){
    //     setUserItemQuantity(prevUserItemQuantity => prevUserItemQuantity < 99 ? prevUserItemQuantity + 1: prevUserItemQuantity)
    // }



  return (
    <AnimatePresence>
        <div className='product-card' id={props.id}>
            <div className="product-card-images">
                <img src={props.image1} alt="" className="main-img" />
                <div className="thumbnails-section">
                    <img src={props.thumbnail1} alt="" />
                    <img src={props.thumbnail2} alt="" />
                    <img src={props.thumbnail3} alt="" />
                    <img src={props.thumbnail4} alt="" />
                </div>
            </div>
            <div className="product-card-text">
                <h3 className="company">sneaker company</h3>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="product-card-prices">
                    <div className='flex-container'>
                        <h2 className='product-card-price'>${parseFloat(props.uPrice * ((100 - props.discount) / 100)).toFixed(2)}</h2>
                        <div className="product-card-discount">{props.discount}%</div>
                    </div>
                    <div className="product-card-oryginal-price">${parseFloat(props.uPrice).toFixed(2)}</div>
                </div>

                <div className="product-card-user-input">
                    <div className="user-input-quantity">
                        <img src={iconMinus} alt="" onClick={props.subtractQuantity} />
                        <h3>{props.userItemQuantity}</h3>
                        <img src={iconPlus} alt="" onClick={props.addQuantity} />
                    </div>

                    <Btn text={'Add to cart'} image={iconCart} onClick={props.addToCart} cardId={props.id} />
                </div>
            </div>
        </div>
    </AnimatePresence>
  )
}

export default ProductCard