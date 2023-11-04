import Image from 'next/image'
import Header from '../components/Header'

import imageMe from '../public/images/micara.jpg'
import imageLogo from '../public/images/logogregory.png'

/**
 * Componente de la página principal.
 *
 * @returns El componente de la página principal.
 */

export default function Home() {
  return (
    <main className="h-screen grid grid-rows-2">
      <section className="grid grid-cols-1 h-screen py-16 px-5 min-[500px]:px-20 sm:px-40 md:grid-rows-4 md:px-8 md:py-3">
        <div className="grid md:grid-cols-2 md:grid-rows-1 md:row-start-2 md:row-end-4 md:w-10/12 md:justify-self-center lg:w-9/12 xl:w-8/12 ">
          <div className="self-start md:col-start-2 md:col-end-3 md:flex md:justify-end md:mt-10 ">
            <Image
              className="rounded-full w-40 mx-auto md:w-64 md:mx-0 lg:w-72"
              src={imageMe}
              alt="Gregory Vicent"
            />
          </div>
          <div className="self-center mx-2 md:col-start-1 md:col-end-2 md:-rotate-12">
            <p className="mt-10 text-center text-lg font-medium md:mt-0 md:text-3xl lg:text-4xl">Hola, soy tu programador web de confianza...</p>
            <h1 className="animate-bounce text-center text-3xl font-bold text-blue-400 md:text-4xl md:mt-3 lg:text-6xl">Gregory Vicent</h1>
            <Image
              className="rounded-full w-16 mx-auto my-5"
              src={imageLogo}
              alt="Logo Gregory Vicent"
            />
          </div>
        </div>
        <div className="self-end md:row-start-1 md:row-end-2 md:self-start">
          <Header />
        </div>
      </section>
      <footer className="self-end p-3">
        <p className="text-center font-light">✨ Creemos algo increible juntos ✨</p>
      </footer>
    </main>
  )
}
