import { useEffect, useState } from 'react'
import { CrosswordClue } from '../Types/CrosswordClue'

interface Props {
  clues: CrosswordClue[]
  focusPosition: { x: number; y: number }
}

function getCluesAtPosition(x: number, y: number, clues: CrosswordClue[]) {
  // Horizontal
  const horizontal = clues
    .filter((clue) => clue.isHorizontal)
    .filter((clue) => clue.y === y)
    .find((clue) => x >= clue.x && x < clue.x + clue.word.length)

  const vertical = clues
    .filter((clue) => !clue.isHorizontal)
    .filter((clue) => clue.x === x)
    .find((clue) => y >= clue.y && y < clue.y + clue.word.length)

  return {
    horizontal: horizontal?.word || '',
    vertical: vertical?.word || '',
  }
}

export function ClueContainer({ clues, focusPosition }: Props) {
  const [currentClues, setCurrentClues] = useState({
    horizontal: '',
    vertical: '',
  })

  useEffect(() => {
    // Update Clues
    setCurrentClues(getCluesAtPosition(focusPosition.x, focusPosition.y, clues))
  }, [focusPosition])

  return (
    <div className="p-4">
      {currentClues.horizontal && (
        <div>
          <h3>→</h3>
          <p>{currentClues.horizontal}</p>
        </div>
      )}
      {currentClues.vertical && (
        <div>
          <h3>↓</h3>
          <p>{currentClues.vertical}</p>
        </div>
      )}
    </div>
  )
}
