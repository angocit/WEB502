import React from 'react'
import Header from './header'
import Footer from './footer'

type Props = {}

const Homepage = (props: Props) => {
  return (
   <>
    <Header title='Đây là trang chủ'/>
    <Footer/>
   </>
  )
}

export default Homepage