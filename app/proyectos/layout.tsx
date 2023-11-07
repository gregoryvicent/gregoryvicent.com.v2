import HeaderWrapper from "@/components/HeaderWrapper"
import Footer from "@/components/Footer"

/**
 * Componente que define el layout de la sección de proyectos.
 * @param children Contenido que se renderizará dentro del layout.
 * @returns El layout con el contenido renderizado.
 */
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderWrapper />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}