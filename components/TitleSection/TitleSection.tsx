import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faImages } from '@fortawesome/free-solid-svg-icons'
import styles from './TitleSection.module.css'

interface ITitleSectionProps {
  section: string
  title: string
  description: string
}

const TitleSection = ({ section, title, description }: ITitleSectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={section === 'about' ? faUser : faImages} />
        <div className={styles.line}>
          <hr />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  )
}
export default TitleSection
