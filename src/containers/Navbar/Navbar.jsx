import { AnimatePresence } from 'framer-motion'
import React from 'react'
import './navbar.css'

import { iconCart, imageAvatar, imageProduct1Thumbnail, imageProduct2Thumbnail, logo } from "../../assets/assetsIndex";
import { Btn, CartItem } from '../../components/componentsIndex';

const Navbar = () => {


  



  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItemCounter, setCartItemCounter] = React.useState(0)
  const [cartItemListData, setCartItemListData] = React.useState([{id:1, thumbnail:imageProduct1Thumbnail, title:'Fall Limited Edition Sneakers', uPrice:125, quantity:3,}])

  const cartItemList = cartItemListData.map(item =>{
    return(
      <CartItem
        key={item.id}
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        uPrice={item.uPrice}
        quantity={item.quantity}
      />
    )
  })



  function counterAdd(){
    setCartItemCounter(cartItemListData.map(item => item.quantity))
    
  }

  function addToCart(e){
    setCartItemListData(prevcartItemListData => [...prevcartItemListData,{
      id:2,
      key:2,
      thumbnail: imageProduct2Thumbnail,
      title: 'but',
      uPrice: 300,
      quantity: 1,
      }]
    )
    counterAdd()
  }



  return (
    <AnimatePresence>
      <section className='navbar'>

        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <ul className="nav-links">
          <a href="#"><li>Collections</li></a>
          <a href="#"><li>Men</li></a>
          <a href="#"><li>Women</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>

        <div className="cart" onClick={()=>{setCartOpen(prevCartOpen => !prevCartOpen)}}>
          <img src={iconCart} alt="" />
          {cartItemCounter > 0 && <div className="cart-items-count">{cartItemCounter}</div>}
        </div>

        {cartOpen &&
          <section className="cart-content">
            <h3 className="cart-header">Cart</h3>
            <div className="cart-items">
              {cartItemList}
              <Btn text={'Checkout'} />
            </div>
          </section>
        }

        <div className="avatar">
          <img src={imageAvatar} alt="" />
        </div>

        {/* <div className="tester" onClick={counterAdd}>TestBtn</div> */}
      </section>
    </AnimatePresence>
  )
}

export default Navbar