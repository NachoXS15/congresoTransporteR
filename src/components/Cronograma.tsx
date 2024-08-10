import Titulo from "./ui/Titulo"

export default function Cronograma() {
    return (
        <section id="cronograma">
            <div className="w-full md:container mx-auto px-5 py-2">
                <Titulo text="Cronograma" />
                <h2>Dia 1</h2>
                <div className="overflow-hidden w-full">
                    <ol className="items-center sm:flex my-5 overflow-x-auto md:pb-5">
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-third rounded-lg mx-5 px-4 py-2">
                                <p className="">
                                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">09:00 am</time>
                                    <span className="tags">&nbsp;</span>
                                </p>
                                <p className="text-base font-normal text-gray-200 dark:text-gray-400">Acreditación <br /> <br /></p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-third rounded-lg mx-5 px-4 py-2">
                                <p>
                                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">09:30 am</time>
                                    <span className="tags">&nbsp</span>
                                </p>
                                <p className="text-base font-normal text-gray-100 dark:text-gray-400">Acto de bienvenida</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-third rounded-lg mx-5 px-4 py-2">
                                <p>
                                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">09:45 am</time>
                                    <span className="tags">&nbsp</span>
                                </p>
                                <p className="text-base font-normal text-gray-100 dark:text-gray-400">Presentación situación actual del pais</p>
                            </div>
                        </li>
                        {/* <!-- exposición --> */}
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-third rounded-lg mx-5 px-4 py-2">
                                <p>
                                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:30 am</time>
                                    <span className="tags tag-exposicion">Exposición</span>
                                </p>
                                <p className="text-base font-normal text-gray-100 dark:text-gray-400">EXPOSICION CENTRAL COFETRA</p>
                            </div>
                        </li>
                        {/* <!-- break --> */}
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-orange-950 rounded-lg mx-5 px-4 py-2">
                                <p>
                                    {/* <!-- <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11:30 am</time> --> */}
                                    <span className="tags tag-break">coffee break</span>
                                </p>
                                <p className="text-base font-normal text-gray-100 dark:text-gray-400">&nbsp;</p>
                            </div>
                        </li>
                        {/* <!-- break --> */}
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                                        <path d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-sec rounded-lg mx-5 px-4 py-2">
                                <p>
                                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12:30 am</time>
                                    <span className="tags tag-conferencia">Conferencia</span>
                                </p>
                                <p className="text-base font-normal text-gray-100 dark:text-gray-400">&nbsp;</p>
                            </div>
                        </li>
                        {/* <!-- break --> */}
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center ">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-sec rounded-full ring-0 ring-white dark:bg-sec sm:ring-8 dark:ring-gray-500 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-fourth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8 bg-orange-950 rounded-lg mx-5 px-4 py-2">
                                <p>
                                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11:30 am</time>
                                    <span className="tags tag-break">Almuerzo</span>
                                </p>
                                <p className="text-base font-normal text-gray-100 dark:text-gray-400">&nbsp;</p>
                            </div>
                        </li>

                    </ol>
                </div>
            </div>
        </section >
    )
}
