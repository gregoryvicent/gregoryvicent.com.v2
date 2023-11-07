import HeaderWrapper from "@/components/HeaderWrapper"
import Footer from "@/components/Footer"

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