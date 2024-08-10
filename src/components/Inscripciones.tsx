import RectCard from "./ui/RectCard"
import Titulo from "./ui/Titulo"

export default function Inscripciones() {
  return (
    <section id="inscripcion" className="w-full mx-auto px-5 py-2 md:container">
    <Titulo text="Inscripciones" color="white"/>
    <div className="cards flex justify-between flex-col sm:flex-row gap-2">
        <RectCard title="Producto 1" precio="3000"/>
        <RectCard title="Producto 2" precio="3000"/>
        <RectCard title="Producto 3" precio="3000"/>
    </div>
    <h3 className="text-gray-950 my-5">Información requerida: precios y descripciones de inscripciones</h3>
</section>
  )
}
