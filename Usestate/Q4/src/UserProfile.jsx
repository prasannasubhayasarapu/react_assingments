import React from 'react'
import UserInfo from './UserInfo'
import { use } from 'react'

const UserProfile = () => {
    const user={
    name:"subha",age:"30"
   }
  return (
   <div style={{padding:"20px" ,fontFamily:"Arial"}}>
    <h2>User profile</h2>
    <UserInfo name={user.name} age={user.age}/>
   </div>
  )
}

export default UserProfile