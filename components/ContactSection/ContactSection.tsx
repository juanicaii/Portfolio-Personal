import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import useScroll from '../../hooks/useScroll'
import scroll from '../../animation'
import styles from './ContactSection.module.css'
import TitleSection from '../TitleSection'

interface IContactSection {
  section: string
}
const ContactSection = ({ section }: IContactSection) => {
  const [animation, ref] = useScroll()
  return (
    <motion.div
      animate={animation}
      ref={ref}
      variants={scroll}
      id="contacto"
      className={styles.container}
    >
      <div>
        <TitleSection
          section={section}
          title="Contactame"
          description="No dudes en enviarme un mail o un mensaje"
        />
      </div>
      <div className={styles.infoPersonal}>
        <div className={styles.info}>
          <p>
            <FontAwesomeIcon color="var(--colorRed)" size="2x" icon={faPhone} />
          </p>
          <span>+54 9 1125857074</span>
        </div>
        <div className={styles.info}>
          <p>
            <FontAwesomeIcon color="var(--colorRed)" size="2x" icon={faEnvelope} />
          </p>
          <span>juaniseijas00@gmail.com</span>
        </div>
      </div>
    </motion.div>
  )
}
export default ContactSection
