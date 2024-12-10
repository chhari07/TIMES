import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import StockNews from '@/components/Stocknews'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <StockNews/>
      <Footer/>
    </div>
  )
}

export default page
