import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const DescriptionTrabajemos = () => {
  return (
    <section className="px-10 sm:px-32 lg:px-56 lg:mt-20">
      <p className="text-2xl lg:text-3xl">Hola!! Mi nombre es,</p>
      <h1 className="text-4xl font-semibold text-blue-400 mb-5 lg:text-5xl">Gregory Vicent</h1>
      <p className="text-center my-10 text-lg text-zinc-500 lg:my-32 lg:text-2xl">gregoryvicent.work@gmail.com</p>
      <p className="text-center font-light lg:text-2xl">Soy un apasionado amante del código que se dedica a construir y programar web, mi enfoque principal es crear fabulosas aplicaciones que vivan en internet para individuos y empresas dando la mejor experiencia para cada uno de los diferentes casos de uso.</p>
      <br />
      <p className="text-center font-light lg:text-2xl">Si tu intención es crear un portafolio, sitio web, aplicación web o similar. Pero necesitas de un experto para empezar, estas en el lugar indicado 😁</p>
      <br />
      <p className="text-center font-light lg:text-2xl">Mira algunos de mis proyectos y encuentra lo que estas buscando:</p>
      <br />
      <div className="flex justify-center my-5">
        <Link className="bg-blue-400 p-5 rounded-md text-2xl animate-pulse hover:animate-none" href="/proyectos">Proyectos <FontAwesomeIcon className="w-8 inline" icon={faArrowRight} /></Link>
      </div>
    </section>
  )
}

export default DescriptionTrabajemos;