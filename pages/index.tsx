import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan Ignacio Seijas</title>
      </Head>
      <HeaderSection />
      <AboutSection />
    </div>
  )
}
