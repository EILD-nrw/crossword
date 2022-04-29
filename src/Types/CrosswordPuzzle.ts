import { CrosswordClues } from './CrosswordHint'

export interface CrosswordPuzzle {
  cells: string[][]
  clues: CrosswordClues[]
}
