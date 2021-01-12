import { useState, useEffect } from 'react'
import styles from './AboutSection.module.css'
import TitleSection from '../TitleSection'
import AboutTab from '../AboutTab'
import SkillsTab from '../SkillsTab'
import useScroll from '../../hooks/useScroll'
import scroll from '../../animation'
import { motion } from 'framer-motion'

interface IAboutSection {
  section: string
}

const AboutSection = ({ section }: IAboutSection) => {
  const [animation, ref] = useScroll()
  const [selected,setSelected] = useState(1)
  const selectTab = (key: number) => {
    setSelected(key)
  }

  const tabs = [
    { key: 1, name: 'Acerca' },
    { key: 2, name: 'Tecnologias' },
  ]
  return (
    <motion.div
      variants={scroll}
      animate={animation}
      ref={ref}
      id="acerca"
      style={{ marginTop: 100, margin: '0 auto ' }}
    >
      <TitleSection
        title="Acerca de mi"
        section={section}
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been
          the industry"
      />
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            onClick={() => {
              selectTab(tab.key)
            }}
            className={`${styles.tab} ${selected === tab.key ? styles.selected : ''}`}
          >
            <p>{tab.name}</p>
          </div>
        ))}
      </div>

      <div style={{ minHeight: 550, marginTop: 33 }}>
        {selected === 1 ? <AboutTab /> : <SkillsTab />}
      </div>
    </motion.div>
  )
}
export default AboutSection
