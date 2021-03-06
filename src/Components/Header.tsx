import edbHeaderLogo from '../img/edb_header_logo.png'
import eildHeaderLogo from '../img/eild_header_logo.png'

export const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="w-full flex">
        <div className="flex-auto">
          <img
            className="max-h-32 max-w-full"
            src={edbHeaderLogo}
            alt="EDB Logo"
          />
        </div>
        <div className="flex-auto">
          <a href="https://medien.hs-duesseldorf.de/eild">
            <img
              className="max-h-32 max-w-full float-right"
              src={eildHeaderLogo}
              alt="EILD Logo"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
