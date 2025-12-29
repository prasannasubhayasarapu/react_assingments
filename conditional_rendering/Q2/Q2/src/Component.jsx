import React from 'react'

function Component() {
    const[color,setColor]=React.useState('red');
    const Toggle=()=>{
setColor(!color)
    }
    return(
        <div style={{backgroundColor:color?'red':'blue',display:'flex',justifyContent:'center',alignItems:'center',height:'100px',width:'100px'}}>
            <button onClick={Toggle}>Toggle</button>
       </div>
    )
}

export default Component;