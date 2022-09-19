import { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { PuzzleGridContainer } from './PuzzleGridContainer'
import useCrossword from '../Helper/useCrossword'
import { ConfigBar } from './ConfigBar'
import { ClueContainer } from './ClueContainer'
import SponsorBar from './SponsorBar'

export function PuzzleContainer () {
  const [selectedSize, setSelectedSize] = useState(15)
  const [selectedTopic, setSelectedTopic] = useState(1)
  const { solutionGrid, clues, puzzleGrid, setPuzzleGrid, refreshPuzzle } =
    useCrossword(selectedSize, selectedTopic)
  const [shouldShowSolution, setShouldShowSolution] = useState(false)
  const [inFocusCellPos, setInFocusCellPos] = useState<{
    x: number
    y: number
  }>({ x: -1, y: -1 })

  useEffect(() => {
    setShouldShowSolution(false)
    setInFocusCellPos({ x: -1, y: -1 })
  }, [solutionGrid])

  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <div className="bg-white p-6">
        <ConfigBar
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          refreshPuzzle={refreshPuzzle}
        />
        <div className="flex justify-center items-center">
          {solutionGrid && puzzleGrid && clues && (
            <PuzzleGridContainer
              solutionCells={solutionGrid}
              puzzleGrid={puzzleGrid}
              setPuzzleGrid={setPuzzleGrid}
              inFocusCellPos={inFocusCellPos}
              setInFocusCellPos={setInFocusCellPos}
              shouldShowSolution={shouldShowSolution}
            />
          )}
          {clues && (
            <ClueContainer
              clues={clues}
              focusPosition={inFocusCellPos}
              showSolution={shouldShowSolution}
            />
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setShouldShowSolution(true)}
            className="px-2 py-1.5 bg-th-red text-white font-semibold border rounded-md"
          >
            Überprüfen
          </button>
        </div>
      </div>
      <SponsorBar />
      <Footer />
    </div>
  )
}
