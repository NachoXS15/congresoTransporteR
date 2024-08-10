import logoBanner from '../assets/img/banner/CONGRESO_FEDERAL_TRANSPORTE.png'

export default function Banner() {
    return (
        <div id="banner" className="w-full bg-gradient-to-b from-gray-300 to-prim dark:bg-gradient-to-b dark:from-sec dark:to-gray-950 min-h-[70dvh] sm:h-96 overflow-hidden">
            <div className="w-full mx-auto sm:container px-5 py-6 sm:py-14 sm:px-0 h-full flex flex-col-reverse md:flex-row md:justify-between items-center md:items-end">
                <h1 className="text-2xl font-semibold mt-5 md:mt-0 md:mb-10">
                    <span>
                        Desde
                        <span className="font-bold text-3xl italic md:text-5xl"> 25 Septiembre</span> <br />
                    </span>
                    <span className="ml-5 md:ml-24">
                        hasta el
                        <span className="font-bold text-3xl italic md:text-5xl"> 30 Septiembre</span>
                    </span>

                </h1>
                <img src={logoBanner} className="w-64 mr-0  md:mr-44" alt="" />
            </div>
        </div>

    )
}
