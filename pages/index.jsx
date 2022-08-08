import Head from 'next/head'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'
import Portfolio from '../components/Portfolio'
import ProjectInMind from '../components/ProjectInMind'

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
        <Qualification />
        <Portfolio />
        <ProjectInMind />
      </main>
    </div>
  )
}
