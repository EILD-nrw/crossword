import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { CrosswordPuzzle } from '../Types/CrosswordPuzzle'
import { CrosswordCell } from './CrosswordCell'

interface Props {
  puzzle: CrosswordPuzzle
  shouldShowSolution: boolean
}

// Clones the puzzle solution and replaces all letters with empty strings to be filled in by the user
function generateGridFromPuzzleCells(puzzleCells: string[][]): string[][] {
  const gridCopy: string[][] = JSON.parse(JSON.stringify(puzzleCells))
  return gridCopy.map((line) => line.map((cell) => (cell !== '#' ? '' : '#')))
}

export function PuzzleGridContainer({ puzzle, shouldShowSolution }: Props) {
  const [puzzleGrid, setPuzzleGrid] = useState<string[][]>(
    generateGridFromPuzzleCells(puzzle.cells)
  )

  const [inFocusCellPos, setInFocusCellPos] = useState<{
    x: number
    y: number
  }>({ x: -1, y: -1 })

  // Generate new empty grid once the puzzle changes
  useEffect(() => {
    setPuzzleGrid(generateGridFromPuzzleCells(puzzle.cells))
  }, [puzzle])

  function handleLetterInput(letter: string, x: number, y: number) {
    const puzzleCopy = JSON.parse(JSON.stringify(puzzleGrid))
    puzzleCopy[y][x] = letter

    setPuzzleGrid(puzzleCopy)
  }

  function handleNavigation(key: 'Enter' | 'Tab' | ' ') {
    if (key === 'Enter') {
      if (puzzleGrid[inFocusCellPos.y + 1][inFocusCellPos.x] === '#') return

      setInFocusCellPos({
        x: inFocusCellPos.x,
        y: inFocusCellPos.y + 1,
      })
    } else {
      if (puzzleGrid[inFocusCellPos.y][inFocusCellPos.x + 1] === '#') return

      setInFocusCellPos({
        x: inFocusCellPos.x + 1,
        y: inFocusCellPos.y,
      })
    }
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
                    onFocus={() =>
                      setInFocusCellPos({ x: colIndex, y: rowIndex })
                    }
                    inFocus={
                      inFocusCellPos?.x === colIndex &&
                      inFocusCellPos.y === rowIndex
                    }
                    navigationHandler={handleNavigation}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
