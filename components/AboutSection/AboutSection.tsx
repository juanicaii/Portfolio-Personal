import { MouseEventHandler, useState } from 'react'
import styles from './AboutSection.module.css'
import TitleSection from '../TitleSection'

interface IAboutSection {
  section: string
}
interface ISelectTab {
  key: number
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
    <div>
      <TitleSection title="Acerca de mi" section={section} />
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
    </div>
  )
}
export default AboutSection
