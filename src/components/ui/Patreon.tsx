import { PatreonProp } from "../../config/types"

export default function Patreon({nombre, img, alt, link}: PatreonProp) {
    return (
        <div className="">
            <div className="aspect-square w-24 md:w-32 bg-white dark:bg-gray-400 rounded-full group grid place-content-center relative overflow-hidden">
                <div className="absolute w-full h-full z-0 group-hover:opacity-15 grid place-content-center px-2">
                    {
                        img ?
                            <img src={'assets/img/sponsors/' + img} alt={alt} className:list={["drop-shadow-md",
                                {
                                    "drop-shadow-lg": nombre == "Smod",
                                    "mix-blend-multiply": nombre == "Red Bus",
                                },
                            ]} />
                            :
                            <img src="assets/img/300_300.png" alt='no hay imagen' />
                    }
                </div>
                <a href={link} className="text-transparent transition-all translate-y-5 group-hover:translate-y-0 group-hover:text-gray-950">{nombre}</a>
            </div>

        </div>
    )
}
