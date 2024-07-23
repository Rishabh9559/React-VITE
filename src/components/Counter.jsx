import React, { useState } from 'react'

function Counter() {
    // let counter=10;
    let [counter,setCounter]=useState(10)
    let removeValue=()=>{
        setCounter(counter-1);
    }
    let addValue=()=>{
       setCounter(counter+1);
        console.log("hii");
        
    }
    
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}> Add value</button>
        <br/>
        <br/>
        <button onClick={removeValue}>Remove Value</button>
        
    </div>
  )
 
}


export default  Counter