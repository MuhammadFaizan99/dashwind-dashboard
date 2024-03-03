import React from 'react'
import Hero from './Hero/Hero'
import Product from './Product/Product'
import Download from './Download/Download'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <Download />
      <FAQ />
      <Contact />
    </div>
  )
}
