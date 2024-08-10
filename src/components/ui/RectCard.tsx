import { RectProps } from "../../config/types"

export default function RectCard({title, precio}: RectProps) {
    return (
        <div className="w-full sm:max-w-96 sm:w-1/3 px-3">
            <div className="w-full min-h-64 sm:min-h-96  p-5 border-2 flex flex-col items-end justify-center sm:flex-col sm:items-center sm:justify-end bg-gray-300 border-gray-800 dark:bg-gray-800 dark:border-gray-300">
                <h3 className="text-3xl">{title}</h3>
                <p className="font-bold text-3xl mb-5">${precio}</p>
                <a href="#" className="btn">Inscribirse</a>
            </div>
        </div>
    )
}
