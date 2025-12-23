import React from 'react'
import AppContext from './AppContext'
import Component2 from './Component2'

const contextValue={    
    a:"Hello from a",
    b:"Hello from b",
    c:"Hello from c",
    d:"Hello from d",
    e:"Hello from e",
    f:"Hello from f"
}   
const Component1 = () => {
  return (

        <AppContext.Provider value={contextValue}>
            <h1>Component1</h1>
            <Component2/>
        </AppContext.Provider>
 
  )
}

export default Component1