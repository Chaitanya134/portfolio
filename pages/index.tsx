import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <Hero />
      <Skills />
    </>
  )
}

export default Home
