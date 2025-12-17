import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
function c(){
    setCount(prev=>prev+1)}
useEffect(()=>{
 if(count!==0&&count%3===0){
        alert(`The current number ${count} is divisible by 3`)
    }
},[count])
   

  return (
    <div><h1>Counter:{count}</h1>
<button onClick={c}>Click</button></div>
)
}

export default Counter