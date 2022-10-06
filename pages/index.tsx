import type { NextPage } from 'next'
import Meta from '../components/Meta'
import Cursor from '../components/Cursor'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Cursor />
      <Header />
      <Hero />
      <Skills />
    </>
  )
}

export default Home
