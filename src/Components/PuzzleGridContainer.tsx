import { CrosswordPuzzle } from '../Types/CrosswordPuzzle'
import { CrosswordCell } from './CrosswordCell'

interface Props {
  puzzle: CrosswordPuzzle | null | undefined
}

export function PuzzleGridContainer({ puzzle }: Props) {
  return (
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
  )
}
