import AppContext from './AppContext'
import {React,useContext} from 'react'
import Component5 from './Component5'
const Component4 = () => {
    const {c,d}=useContext(AppContext)
  return (
    <div>
            <h4>{c}</h4>
            <h4>{d}</h4>
        <Component5/>
    </div>
  )
}

export default Component4
