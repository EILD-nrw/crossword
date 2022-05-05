import { useEffect, useState } from 'react'
import { CrosswordClue } from '../Types/CrosswordClue'
import { CrosswordTask } from '../Types/CrosswordTask'
import { tasks } from './PuzzleData'

// Params
const SIZE_MULTIPLIER = 1.0
const MAX_WORD_ATTEMPTS = 10
const MAX_PUZZLE_ATTEMPTS = 5

/**
 * Checks if a word fits a given position using the following rules:
 *    1. The word has to start within bounds
 *    2. The word has to end within bounds
 *    3. The word cant start or end directly in front of another word
 *    4. Any overlaps of different words have to be the same character
 *    5. Non-overlap characters must not be (orthoganally) adjacent to other words
 * @param word the given word
 * @param cells the current puzzle
 * @param x starting column of the word
 * @param y starting row of the word
 * @param isHorizontal whether the word is placed horizontal
 * @returns if the word fits the position
 */
function wordFitsPosition(
  word: string,
  cells: string[][],
  x: number,
  y: number,
  isHorizontal: boolean
): boolean {
  // Check if word starts within bounds
  if (x < 0 || y < 0) return false

  // Check if word ends within bounds
  if (isHorizontal) {
    if (x + word.length > cells[0].length) return false
  } else {
    if (y + word.length > cells.length) return false
  }

  // Check if word can begin and end correctly
  if (isHorizontal) {
    // Beginning
    if (x - 1 >= 0 && cells[y][x - 1] !== '#') return false

    // End
    if (x + word.length < cells[0].length && cells[y][x + word.length] !== '#')
      return false
  } else {
    // Beginning
    if (y - 1 >= 0 && cells[y - 1][x] !== '#') return false

    // End
    if (y + word.length < cells.length && cells[y + word.length][x] !== '#')
      return false
  }

  const overlaps: { x: number; y: number }[] = []

  // Check for overlaps
  for (let i = 0; i < word.length; i++) {
    const currentChar = word.charAt(i)
    if (isHorizontal) {
      if (cells[y][x + i] !== '#') {
        // Some overlap
        if (currentChar !== cells[y][x + i]) {
          // Invalid overlap -> Word cant be placed
          return false
        }

        // Acceptable overlap -> record it
        overlaps.push({ x: x + i, y: y })
      }
    } else {
      if (cells[y + i][x] !== '#') {
        // Some overlap
        if (currentChar !== cells[y + i][x]) {
          // Invalid overlap -> Word cant be placed
          return false
        }

        // Acceptable overlap -> record it
        overlaps.push({ x: x, y: y + i })
      }
    }
  }

  // Check adjacent space for word collisions
  for (let i = 0; i < word.length; i++) {
    if (isHorizontal) {
      if (
        ((y - 1 >= 0 && cells[y - 1][x + i] !== '#') ||
          (y + 1 < cells.length && cells[y + 1][x + i] !== '#')) && // Adjacent cell is not empty
        !overlaps.some((overlap) => overlap.x === x + i) // No overlap that would allow adjacent characters
      ) {
        return false
      }
    } else {
      if (
        ((x - 1 >= 0 && cells[y + i][x - 1] !== '#') ||
          (x + 1 < cells[0].length && cells[y + i][x + 1] !== '#')) && // Adjacent cell is not empty
        !overlaps.some((overlap) => overlap.y === y + i) // No overlap that would allow adjacent characters
      ) {
        return false
      }
    }
  }

  // No conflict found
  return true
}

/**
 * Attempts to find a position for a given word in the cells
 * @param word
 * @param cells
 * @returns a position if one is found or null otherwise
 */
function getPositionForWord(
  word: string,
  cells: string[][]
): { x: number; y: number; isHorizontal: boolean } | null {
  for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
    for (let colIndex = 0; colIndex < cells[rowIndex].length; colIndex++) {
      for (let charIndex = 0; charIndex < word.length; charIndex++) {
        if (word.charAt(charIndex) === cells[rowIndex][colIndex]) {
          // Letter overlaps -> Check if word fits

          // Horizontal Check
          if (
            wordFitsPosition(word, cells, colIndex - charIndex, rowIndex, true)
          ) {
            return {
              x: colIndex - charIndex,
              y: rowIndex,
              isHorizontal: true,
            }
          }

          // Vertical Check
          if (
            wordFitsPosition(word, cells, colIndex, rowIndex - charIndex, false)
          ) {
            return {
              x: colIndex,
              y: rowIndex - charIndex,
              isHorizontal: false,
            }
          }
        }
      }
    }
  }

  // No valid position found
  return null
}

/**
 * Writes a word into the cells.
 * Note that this function does not check whether the word fits or not!
 * @param cells the current puzzle
 * @param word the word that is written
 * @param isHorizontal whether the word is written horizontal
 * @param x the starting column of the word
 * @param y the starting row of the word
 * @returns a new copy of the cells with the word written at the correct position
 */
function addWordToCells(
  cells: string[][],
  word: string,
  isHorizontal: boolean,
  x: number,
  y: number
) {
  // Copy cells
  const newCells = JSON.parse(JSON.stringify(cells))

  // Add characters
  for (let i = 0; i < word.length; i++) {
    if (isHorizontal) {
      newCells[y][x + i] = word.charAt(i)
    } else {
      newCells[y + i][x] = word.charAt(i)
    }
  }

  return newCells
}

function addRandomCluesToCells(
  cells: string[][],
  clues: CrosswordClue[],
  amountToAdd: number,
  taskPool: CrosswordTask[]
): { cells: string[][]; clues: CrosswordClue[] } | null {
  // Base Case / Completed generation
  if (amountToAdd === 0) return { cells, clues }

  let newCells: string[][]
  let newClues: CrosswordClue[]

  // Empty puzzle
  if (clues.length === 0) {
    // Take task from pool and add it to cells
    const [chosenTask, ...remainingTaskPool] = taskPool

    const xOffset = Math.floor(
      Math.random() * (cells[0].length - chosenTask.word.length + 1)
    )

    const yOffset = Math.floor(Math.random() * cells.length)

    newCells = addWordToCells(cells, chosenTask.word, true, xOffset, yOffset)

    // Prepare clue and add it to clues list
    const newClue = {
      word: chosenTask.word,
      hint: chosenTask.hint,
      x: xOffset,
      y: yOffset,
      isHorizontal: true,
    }
    newClues = [...clues, newClue]

    // Recursively add more clues to cells
    return addRandomCluesToCells(
      newCells,
      newClues,
      amountToAdd - 1,
      remainingTaskPool
    )
  }

  // Puzzle is not empty
  for (let attempt = 0; attempt < MAX_WORD_ATTEMPTS; attempt++) {
    // Prepare task
    const [chosenTask, ...remainingTaskPool] = taskPool

    // Try to find Position
    const position = getPositionForWord(chosenTask.word, cells)

    if (position) {
      const newCells = addWordToCells(
        cells,
        chosenTask.word,
        position.isHorizontal,
        position.x,
        position.y
      )

      const newClue = {
        word: chosenTask.word,
        hint: chosenTask.hint,
        x: position.x,
        y: position.y,
        isHorizontal: position.isHorizontal,
      }
      const newClues = [...clues, newClue]

      const puzzle = addRandomCluesToCells(
        newCells,
        newClues,
        amountToAdd - 1,
        remainingTaskPool
      )

      if (puzzle) return puzzle
    }

    // Add task back to the end of the pool and loop again if
    // 1. No position for the word exists
    // 2. The word leads to a bad puzzle state in which not enough words can be placed
    taskPool = [...remainingTaskPool, chosenTask]
  }

  // Ran out of attempts
  return null
}

/**
 * Wrapper function for recursive addRandomCluesToCells call
 * @param amountOfClues Number of Clues in the puzzle
 * @param topicId Topic of the clues to be added into the puzzle
 * @returns the generated puzzle
 */
function generatePuzzle(
  amountOfClues: number,
  topicId: number
): { cells: string[][]; clues: CrosswordClue[] } | null {
  const puzzleSize = Math.floor(amountOfClues * SIZE_MULTIPLIER)
  const taskPool = tasks
    .filter((task) => task.topic === topicId)
    .filter((task) => task.word.length <= puzzleSize)
    .sort(() => Math.random() - 0.5)

  // Initialize Crossword
  const initialPuzzleCells = Array(puzzleSize)
    .fill(0)
    .map((_) => Array(puzzleSize).fill('#'))
  const initialCluesList: CrosswordClue[] = []

  // Puzzle generation can rarely fail and should be retried
  for (let attempt = 0; attempt < MAX_PUZZLE_ATTEMPTS; attempt++) {
    // Initiate recursive addition of cells
    const puzzle = addRandomCluesToCells(
      initialPuzzleCells,
      initialCluesList,
      amountOfClues,
      taskPool
    )

    // Return successfully generated puzzle
    if (puzzle) return puzzle
  }

  // Return null if puzzle generation failed too many times
  return null
}

// Clones the puzzle solution and replaces all letters with empty strings to be filled in by the user
function generateGridFromPuzzleCells(puzzleCells: string[][]): string[][] {
  const gridCopy: string[][] = JSON.parse(JSON.stringify(puzzleCells))
  return gridCopy.map((line) => line.map((cell) => (cell !== '#' ? '' : '#')))
}

/**
 * Custom Hook to handle crossword generation logic
 * @param clueCount Number of clues to be added to the puzzle
 * @param topicId ID of the chosen topic
 * @returns
 */
export default function useCrossword(clueCount: number, topicId: number) {
  const [solutionGrid, setSolutionGrid] = useState<string[][] | null>()
  const [clues, setClues] = useState<CrosswordClue[]>()
  const [puzzleGrid, setPuzzleGrid] = useState<string[][] | null>()

  function refreshPuzzle() {
    const newPuzzle = generatePuzzle(clueCount, topicId)

    if (!newPuzzle) return

    setSolutionGrid(newPuzzle.cells)
    setClues(newPuzzle.clues)
    setPuzzleGrid(generateGridFromPuzzleCells(newPuzzle.cells))
  }

  useEffect(() => refreshPuzzle(), [])

  return {
    solutionGrid,
    clues,
    puzzleGrid,
    setPuzzleGrid,
    refreshPuzzle,
  }
}
