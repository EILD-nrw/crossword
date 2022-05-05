import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { CrosswordClue } from '../Types/CrosswordClue'
import { CrosswordCell } from './CrosswordCell'

interface Props {
  solutionCells: string[][]
  clues: CrosswordClue[]
  puzzleGrid: string[][]
  setPuzzleGrid: (newGrid: string[][]) => void
  shouldShowSolution: boolean
}

export function PuzzleGridContainer({ solutionCells, clues, puzzleGrid, setPuzzleGrid, shouldShowSolution }: Props) {
const [inFocusCellPos, setInFocusCellPos] = useState<{
    x: number
    y: number
  }>({ x: -1, y: -1 })

  function handleLetterInput(letter: string, x: number, y: number) {
    const puzzleCopy = JSON.parse(JSON.stringify(puzzleGrid))
    puzzleCopy[y][x] = letter

    setPuzzleGrid(puzzleCopy)
  }

  function handleNavigation(direction: 'up' | 'down' | 'left' | 'right') {
    switch (direction) {
      case 'up': {
        if (
          inFocusCellPos.y - 1 < 0 ||
          puzzleGrid[inFocusCellPos.y - 1][inFocusCellPos.x] === '#'
        ) {
          return
        }

        setInFocusCellPos({
          x: inFocusCellPos.x,
          y: inFocusCellPos.y - 1,
        })
        break
      }
      case 'down': {
        if (
          inFocusCellPos.y + 1 > puzzleGrid.length ||
          puzzleGrid[inFocusCellPos.y + 1][inFocusCellPos.x] === '#'
        ) {
          return
        }

        setInFocusCellPos({
          x: inFocusCellPos.x,
          y: inFocusCellPos.y + 1,
        })
        break
      }
      case 'left': {
        if (
          inFocusCellPos.x - 1 < 0 ||
          puzzleGrid[inFocusCellPos.y][inFocusCellPos.x - 1] === '#'
        ) {
          return
        }

        setInFocusCellPos({
          x: inFocusCellPos.x - 1,
          y: inFocusCellPos.y,
        })
        break
      }
      case 'right': {
        if (
          inFocusCellPos.x > puzzleGrid[0].length ||
          puzzleGrid[inFocusCellPos.y][inFocusCellPos.x + 1] === '#'
        ) {
          return
        }

        setInFocusCellPos({
          x: inFocusCellPos.x + 1,
          y: inFocusCellPos.y,
        })
        break
      }
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
                    correctLetter={solutionCells[rowIndex][colIndex]}
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
