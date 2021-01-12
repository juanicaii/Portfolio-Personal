import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './FooterSection.module.css'
import Logo from '../Logo'

const FooterSection = () => {
  const handlerUrl = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.footerIcon}>
        <FontAwesomeIcon
          onClick={() => handlerUrl('https://www.instagram.com/juanicaiii/')}
          size="2x"
          color="black"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          onClick={() => handlerUrl('https://twitter.com/juanicaii')}
          color="black"
          size="2x"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          onClick={() => handlerUrl('https://www.linkedin.com/in/juanignacioseijas/')}
          color="black"
          size="2x"
          icon={faLinkedin}
        />
      </div>
    </footer>
  )
}
export default FooterSection
