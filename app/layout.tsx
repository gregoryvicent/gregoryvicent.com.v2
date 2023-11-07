import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

/**
 * Define los metadatos para el componente de diseño.
 */
export const metadata: Metadata = {
  title: 'Gregory Vicent - Desarrollador web',
  description: 'Portafolio profecional de Gregory Vicent, desarrollador web, programador e ingeniero de software.',
}

/**
 * Componente de diseño raíz.
 * @param children - Los elementos hijos que se renderizarán dentro del diseño.
 * @returns El diseño renderizado.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
