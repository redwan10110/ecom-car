import React from 'react'
import Navigation from '../Shared/Navigation'
import Footer from '../Shared/Footer'
import ShopGrid from './ShopGrid'

const ShopContainer = () => {
  return (
    <>
        <Navigation></Navigation>
        <ShopGrid></ShopGrid>
        <Footer></Footer>
    </>
  )
}

export default ShopContainer