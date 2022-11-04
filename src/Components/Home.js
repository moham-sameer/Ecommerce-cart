import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../state/CartSlice'
import { Link } from 'react-router-dom'
import { useGetAllProductsQuery } from '../state/ProductsApi'
const Home = () => {
 const {data,error, isLoading} = useGetAllProductsQuery()
 const dispatch = useDispatch();
 const handleCart= (product)=>{
dispatch(addToCart(product))
 }
  return (
    <div className='home-container'>
    {isLoading ? (<p id="load">Loading...</p>): error ?(<p id="error">An error occured...</p>): 
    ( <>
      <h2>New Arrivals</h2>
      <div className='products'>
     {data.map((product) => {
      return(
        <div key={product.id} className='product'>
      <h3> {product.name} </h3>
      <img style={{height:"17rem"}} src={product.image} alt={product.name}/>
       <div className='details'>
         <span>{product.desc}</span> <br />
         <span className='price'>${product.price}</span>
       </div>
       <Link to='/Cart'>

       <button onClick={() => handleCart(product)}>Add To Cart</button>
       </Link>
     </div>
      )
     }
     )}
      </div>
    </>)
    }
    </div>
  )
}

export default Home
