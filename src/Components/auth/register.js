import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {registerUser} from '../../state/authSlice'
import './register.css'
const Register = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state)=> state.auth)
  const [user,setUser] = useState({
    name:"",
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
    dispatch(registerUser(user))
  }
  return (

    <div className="register">
     <h1>Create your account</h1>
      <form onSubmit={formHandler}>
        <input type="name" placeholder="Enter Name" onChange={(e)=>setUser({...user,name:e.target.value})} />
        <input type="email" placeholder="Enter email" onChange={(e)=>setUser({...user,email:e.target.value})}  />
        <input type="password" placeholder="Enter password" onChange={(e)=>setUser({...user,password:e.target.value})}  />

        <button>
        {auth.registerStatus === "pending" ? ("Submitting"):"Register"}

        </button>
        {auth.registerStatus === "rejected" ? (<p>{auth.registerError}</p>):null}
      </form>
    </div>
  );
};

export default Register;
