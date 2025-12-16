import React from 'react'

const MeesageCard = ({title,message}) => {
  return (
   <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1>
      Title:
        {title}
      </h1>
      <p>Message:{message}</p>
    </div>
  )
}

export default MeesageCard;