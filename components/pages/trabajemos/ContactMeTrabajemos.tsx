import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const ContactMeTrabajemos = () => {
  return (
    <section className="bg-[url('/images/trabajemosimage2.jpg')] bg-fixed w-full h-96 my-10 bg-cover md:h-[600px]">
      <div className="bg-[rgba(0,0,0,.8)] w-full h-full px-10 flex flex-col justify-start items-center sm:justify-center md:px-36">
        <h2 className="text-center text-3xl py-5 font-bold md:text-4xl">Contactame</h2>
        <div>
          <p className="text-center text-lg font-semibold my-5 md:text-2xl">Trabajemos juntos y creemos algo fabuloso, contactame en: </p>
          <p className="text-center text-lg font-bold my-5 text-blue-300">gregoryvicent.work@gmail.com</p>
        </div>
        <div>
          <p className="text-center text-lg my-5 font-bold md:text-2xl">Tambien puedes encontrarme en:</p>
          <div className="md:mt-10 md:justify-self-end">
            <ul className="flex justify-evenly">
              <li className="md:mx-5">
                <a href="https://twitter.com/Gregory_Vicent" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-8 lg:w-9" icon={faTwitter} />
                </a>
              </li>
              <li className="md:mx-5">
                <a href="https://github.com/gregoryvicent" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-8 lg:w-9" icon={faGithub} />
                </a>
              </li>
              <li className="md:mx-5">
                <a href="https://www.linkedin.com/in/gregory-vicent-dev/" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-8 lg:w-9" icon={faLinkedin} />
                </a>
              </li>
              <li className="md:mx-5">
                <a href="https://www.youtube.com/channel/UCSEdxq0M1N_NpoFvbdWOjkg" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="w-8 text-white transition-colors duration-300 ease-in-out hover:text-blue-400 md:w-8 lg:w-9" icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMeTrabajemos;