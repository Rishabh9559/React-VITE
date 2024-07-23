import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Counter from './components/Counter'

function App() {
  let age=20;
  return (
    <div>
      
    <h1>Hello User, My First React App</h1>
    {/* <Home username="rishabh" age={age}/> */}
    <Counter/>
    
    </div>
  )
}

export default App
