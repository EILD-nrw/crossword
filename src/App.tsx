import { useState } from 'react'
import { CrosswordCell } from './Components/CrosswordCell'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import useCrossword from './Helper/useCrossword'

function App() {
  const { puzzle, refreshPuzzle } = useCrossword(10, 1)

  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <div className="bg-white">
        <table>
          <tbody>
            {puzzle?.cells.map((row, index) => {
              return (
                <tr key={index}>
                  {row.map((cell, index) => (
                    <CrosswordCell key={index} letter={cell} />
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default App
