import logoMini from '../assets/img/LogoCOFETRA-mini.png'
export default function Header() {
    return (
        <header className="w-full bg-gray-300 dark:bg-sec">
            <div className="w-full mx-auto sm:container">
                <div className="w-100 px-0 sm:px-5 pb-0 sm:py-5 flex justify-between items-center">
                    <nav className="w-full mt-3 flex flex-wrap md:flex-nowrap flex-col sm:flex-row justify-start md:justify-between">
                        <a href="/" title="Volver a inicio" className="w-full flex justify-center md:justify-start md:w-24">
                            <img src={logoMini} className="max-h-16" alt="logo cofetra" />
                        </a>
                        <div className="md:hidden text-center">
                            <button id="menu-btn" className="text-2xl mt-2">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                        <div id="menu" className="w-full lg:w-2/3 flex flex-col md:flex-row md:justify-end">
                            <a href="/transporte" className="nav-links">Inicio</a>
                            <a href="/transporte" className="nav-links">Staff</a>
                            <a href="/transporte" className="nav-links">Novedades</a>
                            <a href="/transporte" className="nav-links">Galería</a>
                            <a href="/transporte" className="nav-links">Programa</a>
                            <a href="/transporte" className="nav-links">Contacto</a>
                        </div>
                    </nav>
                </div>

            </div>
        </header>

    )
}
