import React, { useEffect } from 'react'
import './app.css'

import { imageProduct1Thumbnail } from './assets/assetsIndex'
import { ProductCard } from './components/componentsIndex'
import { Navbar } from './containers/containersIndex'
import productsData from './products/productsData'


const App = () => {

  //cart item count
  const [userItemQuantity, setUserItemQuantity] = React.useState(0)
  //state of cart items
  const [cartItemListData, setCartItemListData] = React.useState([])

  const [cartItemCounter, setCartItemCounter] = React.useState(0)

  const productCards = productsData.map(product => {
    return(
      <ProductCard 
        id={product.id}
        key={product.id}
        thumbnail1={product.thumbnail1}
        thumbnail2={product.thumbnail2}
        thumbnail3={product.thumbnail3}
        thumbnail4={product.thumbnail4}
        image1={product.image1}
        image2={product.image2}
        image3={product.image3}
        image4={product.image4}
        title={product.title}
        description={product.description}
        uPrice={product.uPrice}
        discount={product.discount}
        quantity={product.quantity}
        addToCart={addToCart}
        userItemQuantity={userItemQuantity}
        subtractQuantity={subtractQuantity}
        addQuantity={addQuantity}
      />
    )
  })


  


  function addToCart(id){
    //doses item exist in th cart variable
    let exists = false
    // search for item in cart list state
    cartItemListData.filter(item => item.id === id ? exists = true : false)

    if(exists === false && userItemQuantity > 0){

      let cardToBeAdded = productsData.filter(card => card.id === id)
      cardToBeAdded[0].quantity = userItemQuantity

      setCartItemListData(prevcartItemListData => [...prevcartItemListData,cardToBeAdded[0]]
        )
      //reset userItemQuantity state after item was added to cart
      resetQuantity()
    }

      else if(exists === true && userItemQuantity >0){
        // setCartItemListData(cartItemListData => cartItemListData[0].quantity = 9 )
        //Create array of id's of items in the cart
        const cartItemsIds = cartItemListData.map(item => item.id)
        const itemIndex = cartItemsIds.findIndex(item => item === id)
        const slicedOutItem = cartItemListData.slice(itemIndex)[0]
        const updatedItem = {...slicedOutItem, quantity:slicedOutItem.quantity + userItemQuantity} 
        //item removed from cart and added later on with new quantity value
        // const transitionCart = cartItemListData.splice(itemIndex + 1, 1,)
        // setCartItemListData(() =>[...transitionCart, updatedItem])
        setCartItemListData(prevcartItemListData => {
          prevcartItemListData.splice(itemIndex, 1)
          return [...prevcartItemListData, updatedItem]
        })
      }
    }

  
    
    useEffect(() => {
      countItemsInCart()
    },[cartItemListData])

    function subtractQuantity(){
        setUserItemQuantity(prevUserItemQuantity => prevUserItemQuantity > 0 ? prevUserItemQuantity - 1: prevUserItemQuantity)
    }

    function addQuantity(){
        setUserItemQuantity(prevUserItemQuantity => prevUserItemQuantity < 99 ? prevUserItemQuantity + 1: prevUserItemQuantity)
    }
    function resetQuantity(){
      setUserItemQuantity(userItemQuantity => userItemQuantity = 0)
    }

    function countItemsInCart(){
      let sum = ''
      let num = cartItemListData.map(item => item.quantity)
      num.map(element => {
        sum = sum + element
        return sum
      });
      setCartItemCounter(() => sum)
    }

    function removeCartItem(id){
      const idArray = cartItemListData.map(item => item.id)
      const indexOfItem = idArray.findIndex(item => item === id)

      setCartItemListData(prevcartItemListData => {
        prevcartItemListData.splice(indexOfItem, 1)
        return prevcartItemListData
      })
    }
    

  return (
    <div className='app' onClick={countItemsInCart}>
        <Navbar cartList={cartItemListData} cartItemCounter={cartItemCounter} removeCartItem={removeCartItem} />
        {productCards}
    </div>
  )
}

export default App