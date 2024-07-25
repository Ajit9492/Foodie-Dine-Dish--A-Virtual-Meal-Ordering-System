 import React,{useEffect, useState} from 'react';
 import '../styles/auth.css';
 import { Link ,useLocation,useNavigate} from 'react-router-dom';
 import {yupResolver} from '@hookform/resolvers/yup'
 import * as yup from 'yup';
 import {useForm} from 'react-hook-form'
 import { useDispatch, useSelector } from 'react-redux';
 import Spinner from '../components/Spinner'
 import { siginUser } from '../actions/auth';
 const Signin = () => {
     const [isLoading,setLoading]=useState(false)
     const dispatch =useDispatch();
     const user= useSelector(state=>state.user)
     const location =useLocation()
     const navigate = useNavigate()
     const userInfo= user?.user;
    const redirect= location.search ? `/${location.search.split('=')[1]}`:'/';
    console.log(redirect)
     //form validation
     let schema = yup.object().shape({
         email:yup.string().required("Please Enter your Email").email(),
         password:yup.string().required("Please Enter your password")
         .test(
             "regex",
             "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
           val => {
             let regExp = new RegExp(
                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
             )
             return regExp.test(val);
        })   

     })
  

    const {register,handleSubmit,formState:{errors}}=useForm({
       resolver:yupResolver(schema),
   })
console.log(errors)
 
     const submitHandler=(data)=>{
             dispatch(siginUser(data.email,data.password))
         console.log(data.email,data.password)
         setLoading(true)
    }

   useEffect(()=>{
         if(userInfo){
             navigate(redirect)
         }
     },[userInfo])

     return (
         <div className='auth'>
             <div className="form">
                  <div className="logo">
                     {/* <img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="" /> */}
                 </div> 
                 {user?.error&&(<div className="err">
                  {user?.error}
                </div>)}
                 <form onSubmit={handleSubmit(submitHandler)}>
                     <input type="email" name='email' placeholder='Email' {...register('email', { required: true })} />
                     {errors?.email?.message&&<p className="err">{errors?.email?.message}</p>}
                     <input type="password" name="password" id="" placeholder='Password' {...register('password', { required: true })} />
                     {errors?.password?.message&&<p className="err">{errors?.password?.message}</p>}
                     <div className="text">
                       <Link to="/updatepassword">  <p>Forget Password?</p></Link>
                     </div>
                     <button type="submit">{user?.loading? <Spinner/>:'Login'}</button>
               </form>
               <div className="forget">
                 <p>New user?</p> <Link to="/signup">Register</Link>
                </div>
            </div>
        </div>
    )
}
export default Signin
/* 
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {
  const [credentials, setcredentials] = useState({email:"", password:""})
  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signin",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email, password: credentials.password})
    });
    const json = await response.json()
    console.log(json); 
   if(!json.success){
      alert("Enter valid credentials")
    }
    if(json.success){
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
  }

  const onChange =(event) =>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
    <div className='container'>
<form onSubmit={handleSubmit}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/signup" className='m-3 btn btn-danger'>I'm a new user</Link>
</form>
</div>

    </>
  )
} */
