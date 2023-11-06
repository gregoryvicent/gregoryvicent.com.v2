import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faServer,
  faDatabase,
  faCode,
  faArrowUpFromBracket,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"
import {
  faWindowRestore,
  faClock
} from "@fortawesome/free-regular-svg-icons"

/**
 * Componente que muestra los servicios ofrecidos en la página "Trabajemos juntos" del sitio web.
 * @returns JSX.Element
 */

const SevicesTrabajemos = () => {
  return (
    <section className="p-10 sm:px-32 lg:px-56">
      <h2 className="text-3xl md:mb-24 lg:text-4xl">Servicios que ofrezco...</h2>
      <div className="my-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Creación del sitio web</h3>
          <p className="my-4 font-light">Creo el sitio web a partir de plantillas súper personalizables para una rápida entrega o desde cero para hacer algo totalmente a la medida del cliente.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faWindowRestore} style={{ color: "#ffffff", }} />
        </article>
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Optimización del sitio web</h3>
          <p className="my-4 font-light">Me encargare de que su sitio web tenga el mejor rendimiento, sea veloz y accesible para todos los usuarios.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faClock} style={{ color: "#ffffff", }} />
        </article>
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Lógica del servidor</h3>
          <p className="my-4 font-light">De la misma forma programare su servidor web para que cumpla con todas sus necesidades aplicando la lógica que requiera para su negocio o emprendimiento.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faServer} style={{ color: "#ffffff", }} />
        </article>
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Administración de bases de datos</h3>
          <p className="my-4 font-light">Si necesita una base de datos para su app web me ocupare de la estructuración, creación y administración para integrar esta de la mejor manera posible.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faDatabase} style={{ color: "#ffffff", }} />
        </article>
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Subida a producción</h3>
          <p className="my-4 font-light">Su sitio web necesita estar disponible en internet a los usuarios, mi trabajo sera realizar esta puesta en producción en el menor tiempo posible.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faArrowUpFromBracket} style={{ color: "#ffffff", }} />
        </article>
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Scripting de automatización</h3>
          <p className="my-4 font-light">Si no necesita un sitio web, sino algún script que automatice tareas dentro de su servidor web o para uso local estaré feliz de ayudarle de igual forma.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faCode} style={{ color: "#ffffff", }} />
        </article>
        <article className="shadow-black shadow-md rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
          <h3 className="text-blue-400 font-bold text-2xl">Seguimiento y actualización</h3>
          <p className="my-4 font-light">Una vez finalice su proyecto sera un placer seguir en contacto con usted para continuar dando soporte y actualizando el app web a futuro.</p>
          <FontAwesomeIcon className="w-24 mx-auto my-16" icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
        </article>
      </div>
    </section>
  )
}

export default SevicesTrabajemos;