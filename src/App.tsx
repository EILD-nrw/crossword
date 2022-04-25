import { useState } from 'react'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'

function App() {
  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <div className='bg-white'>
        Content
      </div>
      <Footer />
    </div>
  )
}

export default App
