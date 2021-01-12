import { useState } from 'react'
import { motion } from 'framer-motion'
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
}

const Project = ({ title, desc, tecnology, link }: IProject) => {
  const [isHover, setIsHover] = useState(false)
  const [animation, ref] = useScroll()
  const openProject = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <motion.div
      onClick={() => {
        openProject(link)
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
              <p>{tecn.tec}</p>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        animate={isHover ? { translateX: 350 } : { translateX: 0 }}
        className={styles.front}
        transition={{ duration: 0.6 }}
      >
        <img width="300" src="/projects/img-1.jpg" alt="" />
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
    },
    {
      title: 'Flobella Inmobiliario',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [{ tec: 'REACTJS' }, { tec: 'NODEJS' }, { tec: 'SEQUELIZE' }, { tec: 'MYSQL' }],
      link: 'https://marketinginmobiliario.flobellamedia.site',
    },
    {
      title: 'Flobella Media',
      desc: 'Diseño, Frontend y Backend',
      tecnology: [{ tec: 'REACTJS' }, { tec: 'NODEJS' }, { tec: 'SEQUELIZE' }, { tec: 'MYSQL' }],
      link: 'https://flobellamedia.site/',
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
