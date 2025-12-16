import React from 'react'
import UserProfile from './UserProfile'
const UserInfo = ({name,age}) => {
  return (
    <>
    <h2><strong>Name:</strong>{name} </h2>
    <p><strong>age:</strong>{age} 
</p>
    </>
  )
}

export default UserInfo