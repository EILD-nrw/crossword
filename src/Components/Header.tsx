import eildHeaderLogo from '../img/eild_header_logo.png'

export const Header = () => {
  return (
    <header className="bg-white p-4 md:py-6 md:px-10">
      <div className="w-full grid grid-cols-2">
        <h1 className="flex items-center no-underline text-black whitespace-nowrap text-2xl sm:text-6xl font-bold font-mono mr-8">
          DB-Kreuzworträtsel
        </h1>
        <div className="flex-auto">
          <a
            href="https://medien.hs-duesseldorf.de/eild"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="max-h-24 max-w-full float-right"
              src={eildHeaderLogo}
              alt="EILD Logo"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
