import React, { useMemo, useState } from 'react'
import { Sememo } from './Second';

export const First = () => {
  console.log("first page rerendered");
  const [state,setState] = useState(0)
  const [state1,setState1] = useState(0)

  
  const display = useMemo(()=>{
        var i = 0;
        while(i<2000000000)
            i++
        return state % 2 ==0
    },[state])
  
  return (
    <div>
    <h2>first page</h2>
    {display ? "even" : "odd"}
    <h2>{state}</h2>
    <h2>{state1}</h2>
    <button onClick={()=>setState(state+1)}>Click</button>
    <button onClick={()=>setState1(state1+1)}>Click Me</button>
    <Sememo data={state1}/>
    </div>
  )
}
