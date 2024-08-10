import { NewsProps } from "../../config/types"

export default function NewsCard({title, desc}: NewsProps) {
    return (
        <div className="noticia w-full sm:w-1/2 flex p-4">
            <div className="w-full p-4 bg-gray-300 text-gray-950">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="my-3">{desc}</p>
                <a href="/" className="btn">
                    Leer más
                </a>
            </div>
        </div>
    )
}
