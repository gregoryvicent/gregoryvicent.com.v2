import styles from '@/public/css/proyectos.module.css'
import CardProjects from '@/components/CardProjects'

import imageProject1 from '@/public/images/jpg/project1.png'
import imageProject2 from '@/public/images/jpg/project2.png'

/**
 * Componente que muestra una sección con tarjetas de proyectos.
 * @returns {JSX.Element} Elemento JSX que contiene la sección de proyectos.
 */

export default function Proyectos() {
  return (
    <section className="my-10 min-h-[59vh]">
      <h1 className={`text-center text-4xl font-bold ${styles.textShadow} sm:text-6xl sm:mt-16`}>Proyectos</h1>
      <div className="grid grid-cols-1 mx-8 mt-16 sm:mx-32 md:mx-20 md:grid-cols-2 md:gap-x-10 lg:mx-32 xl:grid-cols-3">
        <CardProjects
          img={ imageProject1 }
          name="Portafolio Web"
          description="Elegante portafolio web de una sola página"
          liveUrl="https://wondrous-bubblegum-0561fe.netlify.app/"
          githubUrl="https://github.com/gregoryvicent/website-template01-singlepage"
        />
        <CardProjects
          img={ imageProject2 }
          name="gregoryvicent.com"
          description="Este mismo sitio web que esta en constante evolución"
          liveUrl="https://gregoryvicent.com/"
          githubUrl="https://github.com/gregoryvicent/gregoryvicent.com.v2"
        />
      </div>
    </section>
  )
}
