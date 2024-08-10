import { StaffProps } from "../../config/types"

export default function Card({nombre, img, rol, extra} : StaffProps) {
    return (
        <>
            <div className="w-full aspect-square md:w-1/2">
                <div className="p-2 relative aspect-square w-full">
                    {
                        img ? (
                            <img src="/" className="absolute" />
                        ) : (
                            <div className="aspect-square bg-gray-300 w-full" />
                        )
                    }
                    <div className="description absolute bottom-4 left-4">
                        <h3 className="font-bold text-lg md:text-2xl text-gray-900">
                            {nombre ? nombre : "Nombre"}
                        </h3>
                        <p className="italic text-sm text-gray-600">
                            {rol} - {extra ? extra : ""}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
