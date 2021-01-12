import styles from './ProjectSection.module.css'
import TitleSection from '../TitleSection'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface IProjectSection {
  section: string
}
interface IProject {
  title: string
  desc: string
  tecnology: any[]
}

const Project = ({ title, desc, tecnology }: IProject) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <motion.div
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
          <span>Amaip</span>
          <p>Diseño, Frontend y Backend</p>
          <p>Tecnologias utilizadas</p>
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
  ]

  return (
    <div>
      <TitleSection
        section={section}
        title="Projectos"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been
          the industry"
      />
      <div className={styles.container}>
        {projects.map((project) => (
          <Project title={project.title} desc={project.desc} tecnology={project.tecnology} />
        ))}
      </div>
    </div>
  )
}
export default ProjectSection
