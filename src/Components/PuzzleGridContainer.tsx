import { useEffect, useRef, useState } from 'react'
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

  const cellRefs = useRef<HTMLInputElement[][]>(
    Array(puzzleGrid.length)
      .fill(0)
      .map(() => [])
  )

  useEffect(() => {
    cellRefs.current = Array(puzzleGrid.length)
      .fill(0)
      .map(() => [])
  }, [puzzle])

  const [inFocusCellPos, setInFocusCellPos] = useState<{
    x: number
    y: number
  }>()

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
                    ref={(ref) => ref && cellRefs.current[rowIndex].push(ref)}
                    onFocus={() =>
                      setInFocusCellPos({ x: colIndex, y: rowIndex })
                    }
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
