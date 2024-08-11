import { directivos } from "../config/data"
import Card from "./ui/Card"
export default function Staff() {
    return (
        <section id="staff" className="w-full mx-auto bg-prim dark:bg-gray-900 mt-4 px-5 py-2 md:container">
            <h2>Autoridades</h2>
            <p>Información requerida: descripción del staff </p>
            <div id="cards" className="flex flex-col sm:flex-row gap-0 sm:gap-1 md:gap-5 justify-start">
                {directivos.map(card => (
                    <Card nombre={card.nombre} rol={card.rol} extra={card.extra} img="" />
                ))}
            </div>
        </section>
    )
}
