import styles from './HeaderSection.module.css'
import { useState } from 'react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { SlideDown } from 'react-slidedown'

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Inicio', url: '/' },
    { name: 'Acerca', url: '/acerca' },
    { name: 'Proyectos', url: '/proyectos' },
  ]

  const openNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
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
                  <li key={link.name}>{link.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <SlideDown className={'my-dropdown-slidedown'}>
            {isOpen ? (
              <div className={styles.navMobile}>
                <ul>
                  {links.map((link) => (
                    <li key={link.name}>{link.name}</li>
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
    </>
  )
}

export default HeaderSection
