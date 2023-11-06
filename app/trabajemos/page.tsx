import Header from "@/components/Header"
import HeaderTrabajemos from "@/components/pages/trabajemos/HeaderTrabajemos"
import DescriptionTrabajemos from "@/components/pages/trabajemos/DescriptionTrabajemos"
import ICanHelpYouTrabajemos from "@/components/pages/trabajemos/ICanHelpYouTrabajemos"
import ServicesTrabajemos from "@/components/pages/trabajemos/ServicesTrabajemos"
import ContactMeTrabajemos from "@/components/pages/trabajemos/ContactMeTrabajemos"

export default function Trabajemos() {
  return (
    <main>
      <div className="px-5 min-[500px]:px-20 sm:px-40 md:grid-rows-4 md:px-8 md:py-3">
        <Header />
      </div>
      <HeaderTrabajemos />
      <DescriptionTrabajemos />
      <ICanHelpYouTrabajemos />
      <ServicesTrabajemos />
      <ContactMeTrabajemos />
    </main>
  )
}