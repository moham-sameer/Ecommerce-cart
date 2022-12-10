import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import {toast} from 'react-toastify'
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logoutUser } from '../state/authSlice';
const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state)=> state.cart);
  const auth = useSelector((state)=> state.auth);
  const dispatch = useDispatch()
  const remove = (id)=>{
    dispatch(logoutUser(id))
  }
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
    {
      auth._id ? <Links style={{color:"white"}} onClick={()=>{  remove(); toast.warning("You've logged out",{position:"top-center"})}} >Logout</Links>: 
      <AuthLinks><Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </AuthLinks>
    }
    </nav>
  )
}

export default Navbar;

const AuthLinks = styled.div`

a{
  &:last-child{
    margin-left:2rem;
  }
}
`;
const Links = styled.div`
color:white;
display:flex;
div{
  cursor:pointer;
  &:last-child{
    margin-left:2rem;
  }
}
`

