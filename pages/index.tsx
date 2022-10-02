import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Meta from '../components/Meta'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <Hero />
    </>
  )
}

export default Home
