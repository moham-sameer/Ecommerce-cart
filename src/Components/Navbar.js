import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state)=> state.cart);
  return (
    <nav className='nav-bar'>
    <Link to='/'>

      <h2>OnlineShop</h2>
    </Link>
    <Link to='/Cart'>

      <div className='nav-bag'>
      <Badge badgeContent={cartTotalQuantity} color="success">
        <ShoppingCartIcon style={{fontSize:"2.4rem"}} />
</Badge>
      </div>
    </Link>
    </nav>
  )
}

export default Navbar
