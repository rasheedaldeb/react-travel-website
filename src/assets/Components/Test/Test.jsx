import React, { useState } from "react"
const Test = () => {
    const [count, setcount] =useState(0)
    const counting = ()=>{
        setcount(count+1)
    }
    return (
        <div>
        <button onClick={()=>{counting()}}>click</button>
        <p>{count}</p>
        </div>
    )
}

export default Test
