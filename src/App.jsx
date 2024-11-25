
import './App.css'
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Headers from './components/Others/Headers'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
// import { useState } from 'react'

const App=()=> {

  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const AuthData=useContext(AuthContext)
  

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      console.log(userData)
      if (loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }
  },[])
 
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=="123"){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(AuthData  ){
      const employee=AuthData.employees.find((e)=>e.email==email && e.password==password)
      if (employee)
      {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    
    }
    else{
      alert('Invalid Credentials')
    }
  }


  
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}></Login>:''}
     {user =='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee' ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App