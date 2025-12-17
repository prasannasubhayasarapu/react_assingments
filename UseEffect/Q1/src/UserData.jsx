import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UserData = () => {
  const[user,setUser]=useState('null')
const[loading,setLoading]=useState(true)
useEffect(()=>{
  const fetchuser=async()=>{
try{
const response=await fetch('https://jsonplaceholder.typicode.com/users/1')
if(!response.ok){
throw new Error("https not ecthing",`${response.status}`)
}
const data=await response.json()
setUser(data)

}
catch(error){
console.log(error);
}
finally{
  setLoading(false)
}
  }
fetchuser()
},[])
if(loading){
  return<div>Loading...</div>
}
  return (
    <div><h1>UserData</h1>
    <ul>
      <li>{user.name}</li>
    <li>{user.email}</li>

      <li>{user.phone}</li>

      </ul></div>
  )
}

export default UserData