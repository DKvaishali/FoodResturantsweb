import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import banner from '../images/banner.jpeg'
import '../Style/HomeStyle.css';
const Home = () => {
  return (
    <Layout>
    <div className='home' style={{backgroundImage:`url(${banner})`}}>
    <div className='headerContainer' >
      <h1>Food Website</h1>
      <p>Best Food in India</p>
      <Link to="/menu">
      <button>Order Now</button>
      </Link>
     </div>
    </div>
    </Layout>
  )
}

export default Home
