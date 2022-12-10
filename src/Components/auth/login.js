import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../../state/authSlice'
import './register.css'
const Login = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state)=> state.auth)
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  useEffect(()=>{
    if(auth._id){
      history('/cart')
    }
  })
  // console.log(user)
  // const changeHandler = (e)=>{
    // setUser({...user, [e.target.type]:e.target.value})
    // }
    const formHandler = (e)=>{
    console.log(auth) 
    e.preventDefault()
    dispatch(loginUser(user))
  }
  return (

    <div className="register">
     <h1>Login to your account</h1>
      <form onSubmit={formHandler}>
        <input type="email" placeholder="Enter email" onChange={(e)=>setUser({...user,email:e.target.value})}  />
        <input type="password" placeholder="Enter password" onChange={(e)=>setUser({...user,password:e.target.value})}  />

        <button>
        {auth.loginStatus === "pending" ? ("Submitting"):"Login"}

        </button>
        {auth.loginStatus === "rejected" ? (<p>{auth.loginError}</p>):null}
      </form>
    </div>
  );
};

export default Login;
