import Head from 'next/head'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mfoniso Ayara</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-8'>
        <Nav />
        <Banner/>
        <About/>
      </main>
    </div>
  )
}
