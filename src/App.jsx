import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { First } from './pages/First'
import One from './pages/One'

function App() {
  const abc = createBrowserRouter([
    {path: "/",
      element: <First/>
    },
    {
      path: "/one",
      element: <One/>
      
    }
  ])
  return (
    <div>
    <RouterProvider router={abc}></RouterProvider>
    </div>
  )
}

export default App