import Head from 'next/head'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan Ignacio Seijas</title>
      </Head>
      <HeaderSection />

      <AboutSection section="about" />

      <ProjectSection section="project" />

      <ContactSection section="contact" />

      <FooterSection />
    </div>
  )
}
