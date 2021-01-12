import styles from './ContactSection.module.css'
import TitleSection from '../TitleSection'

interface IContactSection {
  section: string
}
const ContactSection = ({ section }: IContactSection) => {
  return (
    <div className={styles.container}>
      <div>
        <TitleSection
          section={section}
          title="Contactame"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry"
        />
      </div>
    </div>
  )
}
export default ContactSection
