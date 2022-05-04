import { ChangeEvent, forwardRef } from 'react'

interface Props {
  letter: string
  setLetter: (letter: string) => void
  correctLetter: string
  shouldShowSolution: boolean
}

export const CrosswordCell = forwardRef<any, Props>(
  ({ letter, setLetter, correctLetter, shouldShowSolution }, ref) => {
    function handleLetterInput(e: ChangeEvent<HTMLInputElement>) {
      setLetter(e.target.value.toUpperCase())
    }

    return (
      <td className="border border-black p-0">
        {letter === '#' ? (
          <div className="w-8 h-8 bg-slate-400" ref={ref} />
        ) : (
          <input
            className={`w-8 h-8 flex justify-center items-center font-bold text-center ${
              shouldShowSolution
                ? letter === correctLetter.toUpperCase()
                  ? 'bg-green-100'
                  : 'bg-red-100'
                : ''
            }`}
            type="text"
            maxLength={1}
            value={letter}
            onChange={handleLetterInput}
            ref={ref}
          ></input>
        )}
      </td>
    )
  }
)
