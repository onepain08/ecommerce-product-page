import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import './navbar.css'

import { iconCart, imageAvatar, logo, iconMenu, iconClose } from "../../assets/assetsIndex";
import { Btn, CartItem } from '../../components/componentsIndex';

const Navbar = (props) => {


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



  const [cartOpen, setCartOpen] = React.useState(false)
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const [mobileWidth, setMobileWidth] = React.useState(props.mobile < 800 ? true : false)

  useEffect(() =>{
    setMobileWidth(props.mobile < 800 ? true : false)
  },[props.mobile])

  


  //Animations

  const animDesktopMenu = {
    initial:{opacity:0},
    animate:{opacity:1, height: 'min-content', width: 'min-content'},
  }

  const animMobileMenu ={
    initial:{opacity:0, height: 0, width:0},
    animate:{opacity:1, height: '100vh', width: '67vw', transition: {duration:0.2 ,staggerChildren: 0.1}},
    exit:{opacity:0, height: 0, width:0}
  }

  const animMobileMenuLinks = {
    initial:{opacity:0, x: '-10rem'},
    animate:{opacity:1, x: 0, },
    exit:{}
  }

  // const animCartContent = {
  //   initial:{},
  //   // animate:{opacity:1, height: '16.125rem', width: '22.625rem', transition: {duration:0.2 ,staggerChildren: 0.1}},
  //   animate:{scale:[0 ,1.1, 1]},
  //   exit:{opacity:0, height: 0, width:0}
  // }
  

  return (
    <AnimatePresence>
      <section className='navbar'>
        {props.mobile < 801 &&
          <div className="hamburger-btn" onClick={() => setMobileMenu(prevmobileMenu => !prevmobileMenu)}>
            <img src={iconMenu} alt="" />
          </div>
        }
        <div className='logo' id='logo'>
          <img src={logo} alt="" />
        </div>

        {((mobileMenu && mobileWidth) || props.mobile > 800 )&&
          <div className='mist'>
            <motion.ul className="nav-links"
            variants={mobileWidth ? animMobileMenu : animDesktopMenu}
            initial='initial'
            animate='animate'
            exit='exit'>

              {mobileMenu && props.mobile < 801 &&
                <img src={iconClose} alt='' onClick={() => setMobileMenu(prevmobileMenu => !prevmobileMenu)} />
              }

              <motion.a href="#logo" variants={animMobileMenuLinks}><li>Collections</li></motion.a>
              <motion.a href="#logo" variants={animMobileMenuLinks}><li>Men</li></motion.a>
              <motion.a href="#logo" variants={animMobileMenuLinks}><li>Women</li></motion.a>
              <motion.a href="#logo" variants={animMobileMenuLinks}><li>About</li></motion.a>
              <motion.a href="#logo" variants={animMobileMenuLinks}><li>Contact</li></motion.a>
            </motion.ul>
          </div>
        }

        <div className="cart" onClick={()=>{setCartOpen(prevCartOpen => !prevCartOpen)}}>
          <img src={iconCart} alt="" />
          {props.cartItemCounter > 0 && <div className="cart-items-count">{props.cartItemCounter}</div>}
        </div>

        {cartOpen &&
          <motion.section className="cart-content" >
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
          </motion.section>
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