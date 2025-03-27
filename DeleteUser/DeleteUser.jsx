import React from 'react'
import axios from "axios";
import  { useEffect } from 'react'

export default function DeleteUser() {


    function getAllUsers(){
        axios.get("http://localhost:3000/users")
        .then ((res)=>res)
        .then ((res)=>console.log(res))

        .catch((error)=>console.log(error))
    }
   
    function Delete(id){
        axios.delete(`http://localhost:3000/users${id}`)
        .then((res)=>res)
        .then((res)=>console.log(res))
        
        .catch((error)=>console.log(error))
    }

    useEffect (()=>{
        getAllUsers ()
        Delete()
    },[])

  return (
    <div>
      
    </div>
  )
}
