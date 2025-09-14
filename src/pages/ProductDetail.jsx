import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {productId} = useParams()
  return (
      <div>
      <h1 style={{marginTop:"50px"}}>Products Detail</h1>
      <p>{productId}</p>
      </div>
  )
}

export default ProductDetail