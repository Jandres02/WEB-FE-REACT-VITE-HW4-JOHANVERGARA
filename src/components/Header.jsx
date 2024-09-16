import logo2 from "/src/assets/logo2.png";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src={logo2} alt="amazfitlogo" className="h-12 w-auto"></img>
        </div>

        <nav>
          <ul className="flex flex-wrap space-x-4 sm:space-x-8">
            <li>
              <a href="#intro" className="text-white hover:text-gray-500 no-underline">Introducción</a>
            </li>
            <li>
              <a href="#dofa" className="text-white hover:text-gray-500 no-underline">DOFA</a>
            </li>
            <li>
              <a href="#organizational-identity" className="text-white hover:text-gray-500 no-underline">Identidad Organizacional</a>
            </li>
            <li>
              <a href="#strategic-objectives" className="text-white hover:text-gray-500 no-underline">Objetivos Estratégicos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
