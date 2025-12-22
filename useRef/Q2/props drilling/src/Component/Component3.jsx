import React from 'react'
import Component4 from './Component4'

const Component3 = ({a,b,c,d,e,f}) => {
  return (
    <div>
        <h4>'This is prop a from Component3 : '{a}</h4>
        <h4>'This is prop b from Component3 : '{b}</h4>
        <Component4 
    c={c}
    d={d}
    e={e}
    f={f}/>
        
        
        </div>
  )
}


export default Component3