import { SlideDown } from 'react-slidedown'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from './HeaderSection.module.css'
import Logo from '../Logo'

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Inicio', url: '/#inicio' },
    { name: 'Acerca', url: '/#acerca' },
    { name: 'Proyectos', url: '/#proyectos' },
    { name: 'Contacto', url: '/#contacto' },
  ]

  const openNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div id="inicio">
      <video src="/bg.mp4" loop muted autoPlay className={styles.video} />
      <div className={styles.bgVideo} />
      <div className={`${styles.header}`}>
        <div className={`${styles.containerSubHeader}`}>
          <div className={styles.subHeader}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.nav}>
              <span onClick={openNavbar} className={styles.menu}>
                {' '}
                <FontAwesomeIcon icon={faBars} />
              </span>
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SlideDown className="my-dropdown-slidedown">
            {isOpen ? (
              <div className={styles.navMobile}>
                <ul>
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </SlideDown>
        </div>

        <div className={styles.content}>
          <span>Desarollador FullStack JavaScript</span>
          <h1>Juan Ignacio Seijas</h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por
            scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
          <button>Descargar CV</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
