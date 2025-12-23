import React from 'react'
import AppContext from './AppContext'
import {useContext} from 'react'
const Component6 = () => {
     const {e}=useContext(AppContext)
  return (
    
    <div>
        <h1>Component6</h1>
          <h4>This is from prop e: {e}</h4>
    </div>
  )
}

export default Component6