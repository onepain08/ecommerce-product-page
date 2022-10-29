import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import './product-card.css'

import { Btn, Lightbox } from "../componentsIndex";
import { iconCart, iconMinus, iconPlus } from '../../assets/assetsIndex';

const ProductCard = (props) => {

    const imagesArray =[props.image1, props.image2, props.image3, props.image4]
    const [imgIndex, setImgIndex] = React.useState(0)
    const [lightboxState, setLightboxState] = React.useState(false)
    const [currentImage, setCurrentImage] = React.useState(imagesArray[0])

    function setIndex(index){
        setImgIndex(index)
    }
    function changeMainImg(){
        setCurrentImage(imagesArray[imgIndex])
    }

    function nextImage(){
        setImgIndex(prevIndex => prevIndex < imagesArray.length - 1 ? prevIndex +1: 0 )
    }

    function previousImage(){
        setImgIndex(prevIndex => prevIndex === 0 ? imagesArray.length -1: prevIndex - 1 )
    }
    
    function lightboxToggle(){
        setLightboxState(prevlightboxState => !prevlightboxState)
    }
    
    useEffect(() =>{
        changeMainImg()
    },[imgIndex])
    
  return (
    <AnimatePresence>
        <div className='product-card' id={props.id}>

            {(lightboxState || (props.mobileState < 801) ? true : false) &&<Lightbox 
                image1={props.image1}
                image2={props.image2}
                image3={props.image3}
                image4={props.image4}
                thumbnail1={props.thumbnail1}
                thumbnail2={props.thumbnail2}
                thumbnail3={props.thumbnail3}
                thumbnail4={props.thumbnail4}
                currentImage={currentImage}
                nextImage={nextImage}
                previousImage={previousImage}
                setIndex={setIndex}
                lightboxToggle={lightboxToggle}
            />}

            <div className="product-card-images">
                <img src={currentImage} alt="" className="main-img" onClick={lightboxToggle} />
                <div className="thumbnails-section">
                    {/* <div className="thumbnail-underlay"></div> */}
                    <img src={props.thumbnail1} alt="" onClick={()=> setIndex(0)} />
                    <img src={props.thumbnail2} alt="" onClick={()=> setIndex(1)} />
                    <img src={props.thumbnail3} alt="" onClick={()=> setIndex(2)} />
                    <img src={props.thumbnail4} alt="" onClick={()=> setIndex(3)} />
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