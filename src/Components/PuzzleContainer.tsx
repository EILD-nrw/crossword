import { ChangeEvent, useState } from 'react'
import { CrosswordCell } from './CrosswordCell'
import { Footer } from './Footer'
import { Header } from './Header'
import { PuzzleGridContainer } from './PuzzleGridContainer'
import useCrossword from '../Helper/useCrossword'
import { ConfigBar } from './ConfigBar'

export function PuzzleContainer() {
  const [selectedSize, setSelectedSize] = useState(15)
  const [selectedTopic, setSelectedTopic] = useState(1)
  const [shouldShowSolution, setShouldShowSolution] = useState(false)
  const { puzzle, refreshPuzzle } = useCrossword(selectedSize, 1)

  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <div className="bg-white p-4 text-4xl font-semibold font-mono cursor-default">
        Datenbank-Kreuzworträtsel
      </div>
      <div className="bg-white p-6">
        <ConfigBar
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          refreshPuzzle={refreshPuzzle}
        />
        {puzzle && (
          <PuzzleGridContainer
            puzzle={puzzle}
            shouldShowSolution={shouldShowSolution}
          />
        )}
        <div className="flex justify-end">
          <button
            onClick={() => setShouldShowSolution((val) => !val)}
            className="px-2 py-1.5 bg-th-red text-white font-semibold border rounded-md"
          >
            Überprüfen
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
