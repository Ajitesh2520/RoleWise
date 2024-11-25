import React,{useState} from "react";
import { setLocalStorage } from "../../utils/localStorage";
const Headers=(props)=>{


    // const [username,setUsername]=useState('')
    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstName)
    // }

    const loggedOutUser=()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }
    return (
        <div className='flex text-white items-end justify-between'>
            <h1 className="text-2xl font-semibold">Hello <br/> <span className="text-3xl font-bold">username 👋</span> </h1>
            <button onClick={loggedOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-full">Log out</button>

        </div>
    )
}

export default Headers