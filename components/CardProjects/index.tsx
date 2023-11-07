import Image, { StaticImageData } from "next/image";

/**
 * Propiedades para el componente CardProjects.
 */
type CardProjectsProps = {
  img: string | StaticImageData;
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

/**
 * Componente que representa una tarjeta de proyecto con una imagen, nombre, descripción y enlaces a la versión en vivo y al repositorio de GitHub.
 * @param img La imagen del proyecto.
 * @param name El nombre del proyecto.
 * @param description La descripción del proyecto.
 * @param liveUrl El enlace a la versión en vivo del proyecto.
 * @param githubUrl El enlace al repositorio de GitHub del proyecto.
 * @returns Una tarjeta de proyecto con la imagen, nombre, descripción y enlaces correspondientes.
 */
const CardProjects: React.FC<CardProjectsProps> = ({ img, name, description, liveUrl, githubUrl }) => {
  return (
    <article className="my-10 max-w-md mx-auto">
      <div className="relative rounded-lg shadow-xl shadow-black">
        <Image src={img} alt={name} className="w-full h-64 object-cover rounded-lg"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-lg flex items-center justify-center">
          <div className="text-center p-2">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-md my-10 font-semibold">{description}</p>
            <div className="mt-4">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold px-4 py-2 rounded-lg mr-2 bg-zinc-900 text-blue-400 transition-all duration-300 ease-in-out hover:bg-zinc-600 hover:text-blue-300">Ver en vivo</a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold px-4 py-2 rounded-lg mr-2 bg-zinc-900 text-blue-400 transition-all duration-300 ease-in-out hover:bg-zinc-600 hover:text-blue-300">Ver código</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardProjects;