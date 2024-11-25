
import { set } from 'mongoose'
import React,{useState} from 'react'

const Login=({handleLogin})=> {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log('email is ',email,'password is ',password)
        setEmail('')
        setPassword('')
    }


  return (
  
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form  onSubmit ={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input  
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className=' text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey' type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey mt-3' type="password" placeholder='Enter your Password'></input>
                <button className='text-white outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-3'>Log in</button>
            </form>
        </div>
    </div>
  
  )
}

export default Login
