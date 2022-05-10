import { ChangeEvent } from 'react'

const sizeOptions = [
  { text: 'Klein', clueCount: 10 },
  { text: 'Mittel', clueCount: 15 },
  { text: 'Groß', clueCount: 20 }
]

const topicOptions = [
  { text: 'SQL-Allgemein', topicId: 1 },
  { text: 'PL/SQL', topicId: 2 }
]

interface Props {
  selectedTopic: number
  setSelectedTopic: (newTopic: number) => void
  selectedSize: number
  setSelectedSize: (newSize: number) => void
  refreshPuzzle: () => void
}

export function ConfigBar ({
  selectedTopic,
  setSelectedTopic,
  selectedSize,
  setSelectedSize,
  refreshPuzzle
}: Props) {
  function handleSizeChange (e: ChangeEvent<HTMLSelectElement>) {
    setSelectedSize(Number(e.target.value))
  }

  function handleTopicChange (e: ChangeEvent<HTMLSelectElement>) {
    setSelectedTopic(Number(e.target.value))
  }

  return (
    <div className="flex space-x-4 justify-end items-center">
      <div>
        <label htmlFor="topicSelect" className="font-semibold mr-2">
          Thema:
        </label>
        <select
          id="topicSelect"
          value={selectedTopic}
          onChange={handleTopicChange}
          className="border px-2 py-1.5 rounded-md font-semibold"
        >
          {topicOptions.map((topic, index) => {
            return (
              <option value={topic.topicId} key={index}>
                {topic.text}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label htmlFor="puzzleSizeSelect" className="font-semibold mr-2">
          Puzzlegröße:
        </label>
        <select
          id="puzzleSizeSelect"
          value={selectedSize}
          onChange={handleSizeChange}
          className="border px-2 py-1.5 rounded-md font-semibold"
        >
          {sizeOptions.map((size, index) => {
            return (
              <option value={size.clueCount} key={index}>
                {size.text}
              </option>
            )
          })}
        </select>
      </div>
      <button
        className="px-2 py-1.5 bg-th-violet text-white font-semibold border rounded-md"
        onClick={refreshPuzzle}
      >
        Neues Puzzle
      </button>
    </div>
  )
}
