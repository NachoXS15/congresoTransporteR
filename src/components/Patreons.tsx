// import Titulo from "./ui/Titulo.astro";
import Patreon from "./ui/Patreon";
import { sponsors } from "../config/data";
import Titulo from "./ui/Titulo";

export default function Patreons() {
  return (
    <section
      id="patreons"
      className="w-full bg-gray-500 dark:bg-gray-800 md:min-h-64 sm:h-80"
    >
      <div className="w-full md:container mx-auto px-5 py-8 sm:px-0 h-full ">
        <Titulo text="Nuestros patrocinadores" color="white" />
        <h2>Patrocionadores</h2>
        <div className="overflow-hidden flex gap-1">
          <div className="carrusel flex gap-2 ">
            {sponsors.map((sponsor) => (
              <Patreon
                nombre="Patrocinador"
                link={sponsor.url}
                key={sponsor.id}
                alt={sponsor.nombre}
                img={sponsor.img}
              />
            ))}
          </div>
        </div>
        <h3 className="text-gray-800">
          Información requerida: sponsors y demas
        </h3>
      </div>
    </section>
  );
}
