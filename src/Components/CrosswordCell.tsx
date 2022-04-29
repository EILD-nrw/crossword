interface Props {
  letter: string
}

export function CrosswordCell({ letter }: Props) {
  return (
    <td className="border border-black p-0">
      <div className={`w-8 h-8 flex justify-center items-center font-bold ${letter === '#' ? 'bg-black' : ''}`}>
        {letter.toUpperCase()}
      </div>
    </td>
  )
}
