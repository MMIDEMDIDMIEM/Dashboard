import React, { useEffect } from 'react'
import axios from "axios";




export default function GetApi() {
    
    function getAllUsers(){
        axios.get("http://localhost:3000/users")
        .then ((res)=>res)
        .then ((res)=>console.log(res))

        .catch((error)=>console.log(error))
    }
   

    useEffect (()=>{
        getAllUsers ()
    },[])

  return (
    <div>
      
    </div>
  )
}
