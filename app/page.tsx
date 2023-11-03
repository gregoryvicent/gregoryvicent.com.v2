import Image from 'next/image'
import Header from '../components/Header'

import imageMe from '../public/images/micara.jpg'
import imageLogo from '../public/images/logogregory.png'

export default function Home() {
  return (
    <main className="h-screen">
      <section className="grid grid-cols-1 h-screen py-16 px-5 min-[500px]:px-20 sm:px-40 md:px-10 md:grid-cols-2 md:grid-rows-2 md:pt-1">
        <div className="self-start md:row-start-2 md:row-end-4 md:col-start-3 md:col-end-4 md:mx-10">
          <Image
            className="rounded-full w-40 mx-auto md:w-56"
            src={imageMe}
            alt="Gregory Vicent"
          />
        </div>
        <div className="self-center mx-2 md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-3 md:self-start md:-rotate-12 md:mx-10">
          <p className="mt-10 text-center text-lg font-medium md:mt-0 md:text-3xl">Hola, soy tu programador web de confianza...</p>
          <h1 className="text-center text-3xl font-bold text-blue-400 md:text-4xl md:mt-3">Gregory Vicent</h1>
          <Image
            className="rounded-full w-16 mx-auto my-5"
            src={imageLogo}
            alt="Logo Gregory Vicent"
          />
        </div>
        <div className="self-end md:row-start-1 md:row-end-2 md:col-start-1 md:col-span-4 md:self-start">
          <Header />
        </div>
      </section>
    </main>
  )
}
