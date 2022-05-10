import { CrosswordCell } from './CrosswordCell'

interface Props {
  solutionCells: string[][]
  puzzleGrid: string[][]
  setPuzzleGrid: (newGrid: string[][]) => void
  inFocusCellPos: { x: number; y: number }
  setInFocusCellPos: (newPos: { x: number; y: number }) => void
  shouldShowSolution: boolean
}

export function PuzzleGridContainer ({
  solutionCells,
  puzzleGrid,
  setPuzzleGrid,
  inFocusCellPos,
  setInFocusCellPos,
  shouldShowSolution
}: Props) {
  function handleLetterInput (letter: string, x: number, y: number) {
    const puzzleCopy = JSON.parse(JSON.stringify(puzzleGrid))
    puzzleCopy[y][x] = letter

    setPuzzleGrid(puzzleCopy)
  }

  function handleNavigation (direction: 'up' | 'down' | 'left' | 'right') {
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
          y: inFocusCellPos.y - 1
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
          y: inFocusCellPos.y + 1
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
          y: inFocusCellPos.y
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
          y: inFocusCellPos.y
        })
        break
      }
    }
  }

  return (
    <>
      <div className="flex justify-center mt-4">
        <table className="border-2 border-slate-900">
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
