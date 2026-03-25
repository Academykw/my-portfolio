import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aliu Kamalideen Usman — Flutter & Mobile Developer',
  description: 'Mobile App Developer based in Lagos, Nigeria. Building high-performance Flutter & Android apps.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
