import { useEffect, useState } from 'react'
import { CrosswordClue } from '../Types/CrosswordClue'

interface Props {
  clues: CrosswordClue[]
  focusPosition: { x: number; y: number }
  showSolution: boolean
}

/**
 * Attempts to find all clues for words at a given position
 * @param x - x coordinate of the position
 * @param y - y coordinate of the position
 * @param clues - list of clues
 * @returns horizontal and vertical clues
 */
function getCluesAtPosition (x: number, y: number, clues: CrosswordClue[]) {
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
    vertical: vertical || null
  }
}

export function ClueContainer ({ clues, focusPosition, showSolution }: Props) {
  const [currentClues, setCurrentClues] = useState<{
    horizontal: CrosswordClue | null
    vertical: CrosswordClue | null
  }>({
    horizontal: null,
    vertical: null
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
            <h3 className="text-3xl">🠖</h3>
            <p>{currentClues.horizontal.hint}</p>
            {showSolution && (
              <p>
                <b>Lösung:</b> {currentClues.horizontal.word}
              </p>
            )}
          </>
        )}
      </div>
      <div className="h-24">
        {currentClues.vertical && (
          <>
            <h3 className="text-3xl">🠗</h3>
            <p>{currentClues.vertical.hint}</p>
            {showSolution && (
              <p>
                <b>Lösung:</b> {currentClues.vertical.word}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
