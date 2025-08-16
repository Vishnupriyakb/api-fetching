import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Apiiii() {
  const[todo,setTodo]=useState([]);

  async function fetchData() {
    const res= await fetch("https://dummyjson.com/users");
    const data=await res.json();
    setTodo(data.users);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>{todo.map((task)=>
    <div key={task.id}>
      <ul>
        <li> {task.firstName}</li>
      </ul>
     
      </div>
    )}
      
    </div>
  )
}

export default Apiiii
