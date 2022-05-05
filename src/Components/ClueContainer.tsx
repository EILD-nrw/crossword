import { useEffect, useState } from 'react'
import { CrosswordClue } from '../Types/CrosswordClue'

interface Props {
  clues: CrosswordClue[]
  focusPosition: { x: number; y: number }
  showSolution: boolean
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
    horizontal: horizontal || null,
    vertical: vertical || null,
  }
}

export function ClueContainer({ clues, focusPosition, showSolution }: Props) {
  const [currentClues, setCurrentClues] = useState<{
    horizontal: CrosswordClue | null
    vertical: CrosswordClue | null
  }>({
    horizontal: null,
    vertical: null,
  })

  useEffect(() => {
    // Update Clues
    setCurrentClues(getCluesAtPosition(focusPosition.x, focusPosition.y, clues))
  }, [focusPosition])

  return (
    <div className="p-4 w-[400px]">
      <div className="h-24 mb-24">
        {currentClues.horizontal && (
          <>
            <h3>→</h3>
            <p>{currentClues.horizontal.hint}</p>
            {showSolution && <p>Lösung: {currentClues.horizontal.word}</p>}
          </>
        )}
      </div>
      <div className="h-24">
        {currentClues.vertical && (
          <>
            <h3>↓</h3>
            <p>{currentClues.vertical.hint}</p>
            {showSolution && <p>Lösung: {currentClues.vertical.word}</p>}
          </>
        )}
      </div>
    </div>
  )
}
