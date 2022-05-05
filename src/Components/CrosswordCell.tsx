import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useRef,
} from 'react'

interface Props {
  letter: string
  setLetter: (letter: string) => void
  correctLetter: string
  shouldShowSolution: boolean
  onFocus: () => void
  inFocus: boolean
  navigationHandler: (key: 'Enter' | 'Tab' | ' ') => void
}

export const CrosswordCell = forwardRef<any, Props>(
  (
    {
      letter,
      setLetter,
      correctLetter,
      shouldShowSolution,
      onFocus,
      inFocus,
      navigationHandler,
    },
    ref
  ) => {
    function handleLetterInput(e: ChangeEvent<HTMLInputElement>) {
      setLetter(e.target.value.toUpperCase())
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (!inFocus) return

      inputRef.current?.focus()
    }, [inFocus])

    function checkForNavigationKey(e: KeyboardEvent) {
      if (e.key !== 'Enter' && e.key !== 'Tab' && e.key !== ' ') return
      e.preventDefault()
      navigationHandler(e.key)
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
            ref={inputRef}
            onFocus={onFocus}
            onKeyDown={checkForNavigationKey}
          ></input>
        )}
      </td>
    )
  }
)
