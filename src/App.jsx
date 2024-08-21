import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero' 

function App() {
  return <div className='flex items-center justify-center h-screen'>
    <Hero/>
  </div>
}

export default App //If we export the app component as default, we can import it with any name.
