import React from 'react'

const ComponentA=()=>{
    return(
        <div>
            <h1>Component A </h1>
        </div>
    )
}
const ComponentB=()=>{
    return(
        <div>
            <h1>Component B</h1>
        </div>
    )
}

const StatusToggleComponent=()=>{
    const [Status,useStatus]=React.useState(false)

    const handleToggle=()=>{
        useStatus(!Status)
    }

  return (
    <div><button onClick={handleToggle}>Click for Component B</button>
    {Status?<ComponentA/>:<ComponentB/>}
    </div>
  )
}

export default StatusToggleComponent