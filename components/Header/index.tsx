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
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto">
      <nav>
        <ul className="flex justify-around my-7 md:pt-3">
          <li><Link className="font-light text-blue-400 transition-all duration-300 ease-in-out hover:font-bold md:text-lg" href="/">Trabajemos</Link></li>
          <li><Link className="font-light text-blue-400 transition-all duration-300 ease-in-out hover:font-bold md:text-lg" href="/">Proyectos</Link></li>
          <li><Link className="font-light text-blue-400 transition-all duration-300 ease-in-out hover:font-bold md:text-lg" href="/">Sobre mi</Link></li>
        </ul>
      </nav>
      <div className="md:mt-10 md:justify-self-end">
        <ul className="flex justify-evenly">
          <li className="md:mx-5">
            <a href="https://twitter.com/Gregory_Vicent" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-500 md:w-6" icon={faTwitter} />
            </a>
          </li>
          <li className="md:mx-5">
            <a href="https://github.com/gregoryvicent" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-500 md:w-6" icon={faGithub} />
            </a>
          </li>
          <li className="md:mx-5">
            <a href="https://www.linkedin.com/in/gregory-vicent-dev/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-500 md:w-6" icon={faLinkedin} />
            </a>
          </li>
          <li className="md:mx-5">
            <a href="https://www.youtube.com/channel/UCSEdxq0M1N_NpoFvbdWOjkg" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-500 md:w-7" icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;