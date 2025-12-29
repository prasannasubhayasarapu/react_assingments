import React from 'react'
import AppContext from './AppContext'
import {useContext} from 'react'
import Component6 from './Component6'

const Component5 = () => {
    const {f}=useContext(AppContext)
  return (
    <div> <h4>This is prop f: {f}</h4>
        <Component6/>
    </div>
  )
}

export default Component5