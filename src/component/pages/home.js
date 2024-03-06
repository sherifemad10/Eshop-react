import React from 'react'
import Banner from '../Banner/banner'
import Category from '../category/category'
import List from '../List/list'

const Home = ({addtocart}) => {
  return (
    <div>
      <Banner />
      <Category/>
      <List addtocart ={addtocart}/>
    </div>
  )
}

export default Home
