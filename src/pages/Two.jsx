import React from 'react'

function Two({data}) {
    console.log("second page rerendered")
    data()
  return (
    
    <div>
    <h1>Two page</h1>
    </div>
  )
}

//export default Two

export const Twomemo = React.memo(Two)