'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AnnouncementBar from '../components/AnnouncementBar'
import Products from '../components/Products'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  )
}
