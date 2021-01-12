import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faImages } from '@fortawesome/free-solid-svg-icons'
import styles from './TitleSection.module.css'

interface ITitleSectionProps {
  section: string
  title: string
}

const TitleSection = ({ section, title }: ITitleSectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={section === 'about' ? faUser : faImages} />
        <div className={styles.line}>
          <hr />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been
          the industry
        </p>
      </div>
    </div>
  )
}
export default TitleSection
