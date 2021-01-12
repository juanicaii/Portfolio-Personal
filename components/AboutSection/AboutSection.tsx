import { useState, useEffect } from 'react'
import { AnimationControls, motion } from 'framer-motion'
import styles from './AboutSection.module.css'
import TitleSection from '../TitleSection'
import AboutTab from '../AboutTab'
import SkillsTab from '../SkillsTab'
import useScroll from '../../hooks/useScroll'
import scroll from '../../animation'

interface IAboutSection {
  section: string
}

interface IAnimation {
  animation: AnimationControls
}

const AboutSection = ({ section }: IAboutSection) => {
  const [animation, ref] = useScroll()
  const [selected, setSelected] = useState(1)
  const selectTab = (key: number) => {
    setSelected(key)
  }

  const tabs = [
    { key: 1, name: 'Acerca' },
    { key: 2, name: 'Tecnologias' },
  ]
  return (
    <motion.div
      className={styles.acerca}
      variants={scroll}
      animate={animation}
      ref={ref}
      id="acerca"
    >
      <TitleSection
        title="Acerca de mi"
        section={section}
        description="Te cuento un poco de mi historia como programador"
      />
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
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
