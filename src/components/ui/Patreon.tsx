import { PatreonProp } from "../../config/types";
export default function Patreon({ nombre, img, alt, link }: PatreonProp) {
  return (
    <div className="">
      <div className="w-24 h-32 md:w-32 rounded-full group grid place-content-center relative overflow-hidden">
        <div className="absolute w-full h-full z-0 group-hover:opacity-10 grid place-content-center px-2 bg-slate-500">
          {img ? (
            <img
              src={"../../src/assets/img/sponsors/" + img}
              alt={alt}
              //   className="drop-shadow-[0_2px_1px_rgba(255,255,255,0.5)]"
            />
          ) : (
            <img src="assets/img/300_300.png" alt="no hay imagen" />
          )}
        </div>
        <a
          href={link}
          target="_blank"
          className="text-transparent transition-all translate-y-5 group-hover:translate-y-0 group-hover:text-gray-100 "
        >
          {nombre}
        </a>
      </div>
    </div>
  );
}
