import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import './navbar.css'

import { iconCart, imageAvatar, logo } from "../../assets/assetsIndex";
import { Btn, CartItem } from '../../components/componentsIndex';

const Navbar = (props) => {


  



  const [cartOpen, setCartOpen] = React.useState(false)
  // const [cartItemCounter, setCartItemCounter] = React.useState(0)
  // const [cartItemListData, setCartItemListData] = React.useState([{id:1, thumbnail:imageProduct1Thumbnail, title:'Fall Limited Edition Sneakers', uPrice:125, quantity:3,}])

  const cartItemList = props.cartList.map(item =>{
    return(
      <CartItem
        key={item.id}
        id={item.id}
        thumbnail={item.thumbnail1}
        title={item.title}
        uPrice={item.uPrice}
        discount={item.discount}
        quantity={item.quantity}
        removeCartItem={props.removeCartItem}
      />
    )
  })

  // function countItemsInCart(){
  //   let sum = 0
  //   let num = props.cartList.map(item => item.quantity)
  //   num.map(element => {
  //     sum = sum + element
  //     return sum
  //   });
  //   setCartItemCounter(cartItemCounter => sum)
  // }


  return (
    <AnimatePresence>
      <section className='navbar'>

        <div className='logo' id='logo'>
          <img src={logo} alt="" />
        </div>

        <ul className="nav-links">
          <a href="#logo"><li>Collections</li></a>
          <a href="#logo"><li>Men</li></a>
          <a href="#logo"><li>Women</li></a>
          <a href="#logo"><li>About</li></a>
          <a href="#logo"><li>Contact</li></a>
        </ul>

        <div className="cart" onClick={()=>{setCartOpen(prevCartOpen => !prevCartOpen)}}>
          <img src={iconCart} alt="" />
          {props.cartItemCounter > 0 && <div className="cart-items-count">{props.cartItemCounter}</div>}
        </div>

        {cartOpen &&
          <section className="cart-content">
            <h3 className="cart-header">Cart</h3>
            {props.cartList.length > 0 &&
              <div className="cart-items">
                {cartItemList}
                <Btn text={'Checkout'} />
              </div>
            }
            {props.cartList.length === 0 &&
              <div className='no-items-display'>
                <h4>Your cart is empty.</h4>
              </div>
            }
          </section>
        }

        <div className="avatar">
          <img src={imageAvatar} alt="" />
        </div>

        {/* <div className="tester" onClick={countItemsInCart}>TestBtn</div> */}
      </section>
    </AnimatePresence>
  )
}

export default Navbar