// USECALLBACK

import React, { useCallback, useState } from 'react'
import { Twomemo } from './Two';

const One = () => {
    console.log("page re-rendered");

    const [state,setState] = useState(0)
    const [state1,setState1] = useState(0)

    const display = ()=>{console.log("function")}
    const Hello = useCallback(display,[state])
  return (
    <div>
    <h1>{state}</h1>
    <h2>{state1}</h2>
    <button onClick={()=>setState(state+1)}>Click</button>
    <button onClick={()=>setState1(state1+1)}>ClickMe</button>
    <Twomemo data = {Hello}/>
    </div>
  )
}

export default One