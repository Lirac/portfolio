import Head from 'next/head'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mfoniso Ayara</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8">
        <Nav />
        <Banner />
        <About />
        <Skills />
        <Qualification/>
      </main>
    </div>
  )
}
