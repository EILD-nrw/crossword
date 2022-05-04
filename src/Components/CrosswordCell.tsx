import { ChangeEvent } from 'react'

interface Props {
  letter: string
  setLetter: (letter: string) => void
}

export function CrosswordCell({ letter, setLetter }: Props) {
  function handleLetterInput(e: ChangeEvent<HTMLInputElement>) {
    setLetter(e.target.value.toUpperCase())
  }

  return (
    <td className="border border-black p-0">
      {letter === '#' ? (
        <div className="w-8 h-8 bg-slate-400" />
      ) : (
        <input
          className="w-8 h-8 flex justify-center items-center font-bold text-center"
          type="text"
          maxLength={1}
          value={letter}
          onChange={handleLetterInput}
        ></input>
      )}
    </td>
  )
}
