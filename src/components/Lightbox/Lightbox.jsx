import React from 'react'
import './lightbox.css'

import { iconClose, iconNext, iconPrevious } from '../../assets/assetsIndex';


const Lightbox = (props) => {
  return (
    <div className='lightbox'>
        <div className="lightbox-content">
            <div className="exit-btn" >
                <img src={iconClose} alt="" onClick={props.lightboxToggle} />
            </div>
            <div className="lightbox-main-img">
                <img src={props.currentImage} alt="" />
                <div className="arrows-container">

                    <div className='arrows'id='left' onClick={props.previousImage}>
                        <img src={iconPrevious} alt="" />
                    </div>
                    <div className='arrows' id='right' onClick={props.nextImage}>
                        <img src={iconNext} alt="" id='right' />
                    </div>
                </div>
            </div>
            <div className="lightbox-thumbnails">
                <div className="thumbnail-underlay">
                    <img src={props.thumbnail1} alt="" onClick={() => props.setIndex(0)} />
                </div>
                <div className="thumbnail-underlay">
                    <img src={props.thumbnail2} alt="" onClick={() => props.setIndex(1)} />
                </div>
                <div className="thumbnail-underlay">
                    <img src={props.thumbnail3} alt="" onClick={() => props.setIndex(2)} />
                </div>
                <div className="thumbnail-underlay">
                    <img src={props.thumbnail4} alt="" onClick={() => props.setIndex(3)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lightbox