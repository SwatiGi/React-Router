import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <section style={{padding:"50px"}}>
      <h1> Products Page</h1>
      <ul>
      <Link to='/products/p1'>A Bool</Link>
      <Link to='/products/p2'>A Carpet</Link>
      <Link to='/products/p3'>An Online Course</Link>
    
      </ul>
    </section>
  )
}

export default Products