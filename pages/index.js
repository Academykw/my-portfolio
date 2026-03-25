import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Experience from '../components/Experience'
import Expertise from '../components/Expertise'
import Contact from '../components/Contact'

export default function Home() {
  useEffect(() => {
    // Global scroll reveal
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Aliu Kamalideen Usman — Flutter & Mobile App Developer</title>
        <meta name="description" content="Flutter & Mobile App Developer based in Lagos, Nigeria. Building high-performance mobile experiences with Flutter and Android Studio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aliu Kamalideen Usman — Mobile Developer" />
        <meta property="og:description" content="Flutter & Android Mobile App Developer. Building apps users love." />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📱</text></svg>" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Expertise />
        <Contact />
      </main>
    </>
  )
}
