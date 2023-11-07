import styles from '@/public/css/proyectos.module.css'
import CardProjects from '@/components/CardProjects'

import imageProject1 from '@/public/images/trabajemosimage1.jpg'

export default function Proyectos() {
  return (
    <section className="my-10 min-h-[59vh]">
      <h1 className={`text-center text-4xl font-bold ${styles.textShadow}`}>Proyectos</h1>
      <div className="mx-5 mt-16">
        <CardProjects
          img={ imageProject1 }
          name="NextJS"
          description="Elegante portafolio web de una sola página."
          liveUrl="https://wondrous-bubblegum-0561fe.netlify.app/"
          githubUrl=""
        />
      </div>
    </section>
  )
}
