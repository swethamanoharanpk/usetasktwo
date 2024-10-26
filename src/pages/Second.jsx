import React, { useMemo } from 'react'

function Second({data}) {
    console.log("second rendered")
    
  return (
    <div>
    
    <h2>second page{data}</h2>
    </div>
  )
}

//export default Second
export const Sememo = React.memo(Second)