import React from 'react'
import './btn.css';




//Props
// text= text in the middle of the button



const Btn = (props) => {

  return (
    <div className='Btn' onClick={() => props.onClick(props.cardId)}>
      <img src={props.image} alt="" />
        <h3>
            {props.text}
        </h3>
    </div>
  )
}

export default Btn