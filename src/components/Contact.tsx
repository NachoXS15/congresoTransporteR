import Titulo from "./ui/Titulo";

export default function Contact() {
  return (
    <section id="contact" className="min-h-32 bg-gray-800">
    <div className="w-full mx-auto px-5 py-8 sm:container">
        <Titulo text="Contactanos" color="white"/>
        <p className="light:text-white">Podes ponerte en contacto con nosotros rellenando este formulario</p>
        <div className="flex flex-col md:flex-row">
            <form action="/" method="POST" className="text-white w-full md:w-1/2">
                <div className="form_control">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div className="form_control">
                    <label htmlFor="correo">Correo:</label>
                    <input type="email" id="correo" name="correo" /> 
                </div>
                <div className="form_control">
                    <label htmlFor="consulta">Consulta:</label>
                    <textarea name="consulta" id="consulta" className="resize-none"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full btn">Enviar consulta</button>
                </div>
            </form>
            <div className="w-full md:w-1/2 py-5 px-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.578805194178!2d-66.8613774248254!3d-29.41187517524823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427dbb50132f3c7%3A0x34377a31479a2604!2sPaseo%20Cultural%20Pedro%20Ignacio%20de%20Castro%20cimpaa%20Barros!5e0!3m2!1ses-419!2sar!4v1723155953517!5m2!1ses-419!2sar" className="w-full h-full" style={{border:0}}allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>
  )
}
