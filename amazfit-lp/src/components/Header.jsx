export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="flex">
        <img src="/logo.png" alt="" />
        <nav>
            <ul className="flex justify-center space-x-4">
                <li><a href="#intro">Introducción</a></li>
                <li><a href="#dofa">DOFA</a></li>
                <li><a href="#organizational-identity">Identidad Organizacional</a></li>
                <li><a href="#strategic-objectives">Objetivos Estratégicos</a></li>
            </ul>
        </nav>
        </div>
      </header>
    );
  }
  