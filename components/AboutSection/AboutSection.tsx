import { useState } from 'react'
import styles from './AboutSection.module.css'
import TitleSection from '../TitleSection'
import AboutTab from '../AboutTab'
import SkillsTab from '../SkillsTab'

interface IAboutSection {
  section: string
}

const AboutSection = ({ section }: IAboutSection) => {
  const [selected, setSelected] = useState(1)

  const selectTab = (key: number) => {
    setSelected(key)
  }

  const tabs = [
    { key: 1, name: 'Acerca' },
    { key: 2, name: 'Tecnologias' },
  ]
  return (
    <div style={{ marginTop: 50, margin: '0 auto ' }}>
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
    </div>
  )
}
export default AboutSection
