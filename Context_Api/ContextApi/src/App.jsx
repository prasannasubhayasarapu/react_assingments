import React from 'react'
import Component1 from './Component1'
import AppContext from './AppContext'

import './App.css'
function App() {
  return (
    <AppContext.Provider value={{a:10, b:20, c:30, d:40, e:50, f:60}}>
      <div className="App">
        <h1>App Component</h1>
        <Component1/>
      </div>
    </AppContext.Provider>
  )
}
export default App