/**
 * Componentes de genericos.
 */
import HeaderWrapper from "@/components/HeaderWrapper"
import Footer from "@/components/Footer"

/**
 * Componentes de la página "Trabajemos" que muestra información sobre los servicios ofrecidos y un formulario de contacto.
 */
import HeaderTrabajemos from "@/components/pages/trabajemos/HeaderTrabajemos"
import DescriptionTrabajemos from "@/components/pages/trabajemos/DescriptionTrabajemos"
import ICanHelpYouTrabajemos from "@/components/pages/trabajemos/ICanHelpYouTrabajemos"
import ServicesTrabajemos from "@/components/pages/trabajemos/ServicesTrabajemos"
import ContactMeTrabajemos from "@/components/pages/trabajemos/ContactMeTrabajemos"

/**
 * Componente de la página "Trabajemos" que muestra información sobre los servicios ofrecidos y un formulario de contacto.
 * @returns El componente de la página "Trabajemos".
 */

export default function Trabajemos() {
  return (
    <>
      <HeaderWrapper />
      <main>
        <HeaderTrabajemos />
        <DescriptionTrabajemos />
        <ICanHelpYouTrabajemos />
        <ServicesTrabajemos />
        <ContactMeTrabajemos />
        <Footer />
      </main>
    </>
  )
}