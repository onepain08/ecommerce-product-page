import { AnimatePresence } from 'framer-motion'
import React from 'react'
import './product-card.css'

const ProductCard = (props) => {
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
            </div>
        </div>
    </AnimatePresence>
  )
}

export default ProductCard