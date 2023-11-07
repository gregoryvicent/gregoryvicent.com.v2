/**
 * Componente de encabezado que muestra la navegación y los enlaces a las redes sociales.
 */
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:px-10 xl:px-20">
      <nav className="mb-5 md:mb-0">
        <ul className="flex justify-around my-7 md:pt-3 lg:justify-evenly">
          <li><Link className="font-light text-blue-300 p-3 rounded-md shadow-black shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-300 md:text-lg" href="/">Home</Link></li>
          <li><Link className="font-light text-blue-300 p-3 rounded-md shadow-black shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-300 md:text-lg" href="/trabajemos">Trabajemos</Link></li>
          <li><Link className="font-light text-blue-300 p-3 rounded-md shadow-black shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-300 md:text-lg" href="/proyectos">Proyectos</Link></li>
        </ul>
      </nav>
      <div className="md:mt-10 md:justify-self-end">
        <ul className="flex justify-evenly">
          <li className="md:mx-5">
            <a href="https://twitter.com/Gregory_Vicent" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-6 lg:w-9" icon={faTwitter} />
            </a>
          </li>
          <li className="md:mx-5">
            <a href="https://github.com/gregoryvicent" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-6 lg:w-9" icon={faGithub} />
            </a>
          </li>
          <li className="md:mx-5">
            <a href="https://www.linkedin.com/in/gregory-vicent-dev/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-6 lg:w-9" icon={faLinkedin} />
            </a>
          </li>
          <li className="md:mx-5">
            <a href="https://www.youtube.com/channel/UCSEdxq0M1N_NpoFvbdWOjkg" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-6 lg:w-9" icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;