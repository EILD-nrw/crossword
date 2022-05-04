import { CrosswordPuzzle } from '../Types/CrosswordPuzzle'
import { CrosswordCell } from './CrosswordCell'

interface Props {
// Clones the puzzle solution and replaces all letters with empty strings to be filled in by the user
function generateGridFromPuzzleCells(puzzleCells: string[][]): string[][] {
  const gridCopy: string[][] = JSON.parse(JSON.stringify(puzzleCells))
  return gridCopy.map((line) => line.map((cell) => (cell !== '#' ? '' : '#')))
}

export function PuzzleGridContainer({ puzzle }: Props) {
  if (!puzzle) {
    return (
      <div className="bg-th-red p-6">
        Puzzle-Generierung fehlgeschlagen. Bitte versuchen Sie es erneut.
      </div>
    )

  // Generate new empty grid once the puzzle changes
  useEffect(() => {
    setPuzzleGrid(generateGridFromPuzzleCells(puzzle.cells))
  }, [puzzle])

  return (
    <>
      <div className="flex justify-center mt-4">
        <table>
          <tbody>
            {puzzleGrid?.map((row, index) => {
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
      <div className="flex justify-end">
        <button
          onClick={() => {}}
          className="px-2 py-1.5 bg-th-red text-white font-semibold border rounded-md"
        >
          Überprüfen
        </button>
      </div>
    </>
  )
}
