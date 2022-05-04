import { useEffect, useState } from 'react'
import { CrosswordPuzzle } from '../Types/CrosswordPuzzle'
import { CrosswordCell } from './CrosswordCell'

interface Props {
  puzzle: CrosswordPuzzle
}

// Clones the puzzle solution and replaces all letters with empty strings to be filled in by the user
function generateGridFromPuzzleCells(puzzleCells: string[][]): string[][] {
  const gridCopy: string[][] = JSON.parse(JSON.stringify(puzzleCells))
  return gridCopy.map((line) => line.map((cell) => (cell !== '#' ? '' : '#')))
}

export function PuzzleGridContainer({ puzzle }: Props) {
  const [puzzleGrid, setPuzzleGrid] = useState<string[][]>(
    generateGridFromPuzzleCells(puzzle.cells)
  )

  const [shouldShowSolution, setShouldShowSolution] = useState(false)

  // Generate new empty grid once the puzzle changes
  useEffect(() => {
    setPuzzleGrid(generateGridFromPuzzleCells(puzzle.cells))
  }, [puzzle])

  function handleLetterInput(letter: string, x: number, y: number) {
    const puzzleCopy = JSON.parse(JSON.stringify(puzzleGrid))
    puzzleCopy[y][x] = letter

    setPuzzleGrid(puzzleCopy)
  }

  return (
    <>
      <div className="flex justify-center mt-4">
        <table>
          <tbody>
            {puzzleGrid?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <CrosswordCell
                    key={colIndex}
                    letter={cell}
                    setLetter={(letter: string) =>
                      handleLetterInput(letter, colIndex, rowIndex)
                    }
                    correctLetter={puzzle.cells[rowIndex][colIndex]}
                    shouldShowSolution={shouldShowSolution}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setShouldShowSolution(val => !val)}
          className="px-2 py-1.5 bg-th-red text-white font-semibold border rounded-md"
        >
          Überprüfen
        </button>
      </div>
    </>
  )
}
