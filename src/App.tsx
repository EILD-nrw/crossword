import { ChangeEvent, useState } from 'react'
import { CrosswordCell } from './Components/CrosswordCell'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { PuzzleGridContainer } from './Components/PuzzleGridContainer'
import useCrossword from './Helper/useCrossword'

const sizeOptions = [
  { text: 'Klein', clueCount: 10 },
  { text: 'Mittel', clueCount: 15 },
  { text: 'Groß', clueCount: 20 },
]

const topicOptions = [
  { text: 'SQL-Allgemein', topicId: 1 },
  { text: 'PL/SQL', topicId: 2 },
]

function App() {
  const [selectedSize, setSelectedSize] = useState(15)
  const [selectedTopic, setSelectedTopic] = useState(1)
  const { puzzle, refreshPuzzle } = useCrossword(selectedSize, 1)

  function handleSizeChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedSize(Number(e.target.value))
  }

  function handleTopicChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedTopic(Number(e.target.value))
  }

  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <div className="bg-white p-4 text-4xl font-semibold font-mono cursor-default">
        Datenbank-Kreuzworträtsel
      </div>
      <div className="bg-white p-6">
        <div className="flex space-x-4 justify-end">
          <select
            value={selectedTopic}
            onChange={handleTopicChange}
            className="border px-2 py-1.5 rounded-md font-semibold"
          >
            {topicOptions.map((topic) => {
              return <option value={topic.topicId}>{topic.text}</option>
            })}
          </select>
          <select
            value={selectedSize}
            onChange={handleSizeChange}
            className="border px-2 py-1.5 rounded-md font-semibold"
          >
            {sizeOptions.map((size) => {
              return <option value={size.clueCount}>{size.text}</option>
            })}
          </select>
          <button
            className="px-2 py-1.5 bg-th-violet text-white font-semibold border rounded-md"
            onClick={refreshPuzzle}
          >
            Neues Puzzle
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <PuzzleGridContainer puzzle={puzzle} />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {}}
            className="px-2 py-1.5 bg-th-red text-white font-semibold border rounded-md"
          >
            Überprüfen
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
