import React from 'react'
import axios from "axios";

export default function PostApi() {
    
    function PostData(userData){
        axios.post("http://localhost:3000/users",userData)
        .then ((res)=>res)
        .then((res)=>console.log(res))
        
    }

  return (
    <div>
       POST 
       <button onClick={()=>PostData({id:10,nme:"asdf"})}>NEW USER</button>
    </div>
  )
}
