import { useState } from 'react'
import { motion } from 'framer-motion'
import ClipLoader from 'react-spinners/ClipLoader'
import Modal from 'react-modal'
import styles from './ProjectSection.module.css'
import TitleSection from '../TitleSection'
import useScroll from '../../hooks/useScroll'
import scroll from '../../animation'

interface IProjectSection {
  section: string
}
interface IProject {
  title: string
  desc: string
  tecnology: any[]
  link: string
  image: string
}

const Project = ({ title, desc, tecnology, link, image }: IProject) => {
  const [isHover, setIsHover] = useState(false)
  const [animation, ref] = useScroll()

  return (
    <motion.div
      onClick={() => {
        window.open(link, '_blank')
      }}
      animate={animation}
      ref={ref}
      variants={scroll}
      onHoverStart={() => {
        setIsHover(true)
      }}
      onHoverEnd={() => {
        setIsHover(false)
      }}
      className={styles.project}
    >
      <div className={styles.back}>
        <div className={styles.desc}>
          <span>{title}</span>
          <p>{desc}</p>
          <p>
            <strong>Tecnologias utilizadas</strong>
          </p>
          <div className={styles.tec}>
            {tecnology.map((tecn) => (
              <p key={tecn.tec}>{tecn.tec}</p>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        animate={isHover ? { translateX: 350 } : { translateX: 0 }}
        className={styles.front}
        transition={{ duration: 0.6 }}
      >
        <img width="350" height="225" src={`/projects/${image}`} alt="" />
      </motion.div>
    </motion.div>
  )
}

const ProjectSection = ({ section }: IProjectSection) => {
  const projects = [
    {
      title: 'Amaip',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [
        { tec: 'HTML' },
        { tec: 'JS' },
        { tec: 'PHP' },
        { tec: 'CSS' },
        { tec: 'JQUERY' },
        { tec: 'MYSQL' },
      ],
      link: 'https://amaip.com.ar/',
      image: 'amaip.jpg',
    },
    {
      title: 'Torneo Interfederativo Judo',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [
        { tec: 'HTML' },
        { tec: 'JS' },
        { tec: 'PHP' },
        { tec: 'CSS' },
        { tec: 'JQUERY' },
        { tec: 'MYSQL' },
      ],
      link: 'https://judointerfederativo.com.ar/',
      image: 'judo.jpg',
    },
    {
      title: 'SimRacing Fixture',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [
        { tec: 'HTML' },
        { tec: 'JS' },
        { tec: 'PHP' },
        { tec: 'CSS' },
        { tec: 'JQUERY' },
        { tec: 'MYSQL' },
      ],
      link: 'https://simracingfixture.com/',
      image: 'simracing.jpg',
    },
    {
      title: 'Flobella Inmobiliario',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [{ tec: 'REACTJS' }, { tec: 'NODEJS' }, { tec: 'SEQUELIZE' }, { tec: 'MYSQL' }],
      link: 'https://marketinginmobiliario.flobellamedia.site',
      image: 'flobellaI.jpg',
    },
    {
      title: 'Flobella Media',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [{ tec: 'REACTJS' }, { tec: 'NODEJS' }, { tec: 'SEQUELIZE' }, { tec: 'MYSQL' }],
      link: 'https://flobellamedia.site/',
      image: 'flobella.jpg',
    },
  ]

  return (
    <div id="proyectos">
      <TitleSection
        section={section}
        title="Projectos"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been
          the industry"
      />
      <div className={styles.container}>
        {projects.map((project) => (
          <Project
            image={project.image}
            key={project.title}
            title={project.title}
            desc={project.desc}
            tecnology={project.tecnology}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}
export default ProjectSection
