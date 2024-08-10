export default function Footer() {
    return (
        <footer className="bg-gray-950">
            <div className="w-full mx-auto sm:container px-4 py-5 flex flex-col-reverse md:flex-row justify-between">
                <div id="footer_links" className="flex gap-10 my-5">
                    <ul className="flex flex-row md:flex-col w-full justify-between flex-wrap">
                        <li><a href="/transporte" className="">links #1</a></li>
                        <li><a href="/transporte" className="">links #1</a></li>
                        <li><a href="/transporte" className="">links #1</a></li>
                        <li><a href="/transporte" className="">links #1</a></li>
                        <li><a href="/transporte" className="">links #1</a></li>
                    </ul>
                </div>
                <div className="md:w-1/3 lg:w-1/5 flex md:flex-col">
                    <div id="footer_social_links" className="flex flex-col md:flex-row gap-5 justify-evenly px-3">
                        <a href="/transporte"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="/transporte"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="/transporte"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <div className="flex gap-2 my-2 items-center justify-evenly px-3 ">
                        <img src="assets/img/logo_blanco.svg" className="h-14 md:h-10" alt="" />
                            <img src="assets/img/logo-cfi.svg" className="h-14 md:h-10" alt="" />

                            </div>
                    </div>
                </div>
        </footer>
    )
}
