import { CrosswordPuzzle } from '../Types/CrosswordPuzzle'
import { CrosswordCell } from './CrosswordCell'

interface Props {
  puzzle: CrosswordPuzzle | null | undefined
}

export function PuzzleGridContainer({ puzzle }: Props) {
  return (
  return (
    <>
      <div className="flex justify-center mt-4">
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
