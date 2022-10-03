import React from 'react'
import './app.css'

import {  } from './assets/assetsIndex'
import { ProductCard } from './components/componentsIndex'
import { Navbar } from './containers/containersIndex'
import productsData from './products/productsData'


const App = () => {

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
      />
    )
  })

  return (
    <div className='app'>
        <Navbar />
        {productCards}
    </div>
  )
}

export default App