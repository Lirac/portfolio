import Head from 'next/head'
import Nav from '../components/Nav'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mfoniso Ayara</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Banner/>
      </main>
    </div>
  )
}
