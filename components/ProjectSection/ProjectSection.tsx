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
  image: string
}

const Project = ({ title, desc, tecnology, link, image }: IProject) => {
  const [isHover, setIsHover] = useState(false)
  const [animation, ref] = useScroll()

  return (
    <motion.div
      onClick={() => {
        if (link) {
          window.open(link, '_blank')
        }
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
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(/projects/${image})`,
          backgroundRepeat: 'no-repeat',
          border: '1px solid #242a35',
          borderRadius: '1em',
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: isHover ? 1 : 0,
            y: isHover ? 0 : 100,
            transition: {
              duration: 0.5,
            },
          }}
          className={styles.info}
        >
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className={styles.tecnology}>
            {tecnology.map((tec) => (
              <span key={tec.tec}>{tec.tec}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ProjectSection = ({ section }: IProjectSection) => {
  const projects = [
    {
      title: 'Amaip',
      desc: 'Desarollo Fullstack',
      tecnology: [
        { tec: 'HTML' },
        { tec: 'JS' },
        { tec: 'PHP' },
        { tec: 'CSS' },
        { tec: 'JQUERY' },
        { tec: 'MYSQL' },
      ],
      link: 'https://amaip.com.ar/',
      image: 'amaip.png',
    },
    {
      title: 'Torneo Interfederativo Judo',
      desc: 'Desarollo Fullstack',
      tecnology: [
        { tec: 'HTML' },
        { tec: 'JS' },
        { tec: 'PHP' },
        { tec: 'CSS' },
        { tec: 'JQUERY' },
        { tec: 'MYSQL' },
      ],
      link: 'https://judointerfederativo.com.ar/',
      image: 'judo.png',
    },

    {
      title: 'Flobella Media',
      desc: 'Desarollo Frontend',
      tecnology: [{ tec: 'ReactJs' }, { tec: 'NodeJS' }],
      link: '',
      image: 'flobellafront.png',
    },
    {
      title: 'Cuadros Marcel',
      desc: 'Desarollo web Ecommerce',
      tecnology: [{ tec: 'Tienda Nube' }],
      link: 'https://cuadrosmarcel.com.ar/',
      image: 'cuadrosmarcel.png',
    },
    {
      title: 'B21',
      desc: 'Desarollo Fullstack Fintech',
      tecnology: [{ tec: 'NextJs' }, { tec: 'NestJs' }, { tec: 'MongoDB' }],
      link: 'https://b21.cl/',
      image: 'b21.png',
      border: 'none',
    },
    {
      title: 'Tupaca',
      desc: 'Empleado 1 Año como Desarollador Fullstack',
      tecnology: [{ tec: 'ReactJs' }, { tec: 'NodeJs' }, { tec: 'React Native' }],
      link: 'https://tupaca.com',
      image: 'tupaca.png',
      border: '1px solid #000',
    },
    {
      title: 'Avalora',
      desc: 'Empleado 1 Año como Desarollador Fullstack',
      tecnology: [
        { tec: 'ReactJs' },
        { tec: 'NodeJs' },
        { tec: 'React Native' },
        { tec: 'Ionic' },
        { tec: 'Vue' },
        { tec: 'Python' },
      ],
      link: 'https://www.avalora.com/cl',
      image: 'avalora.png',
      border: 'none',
    },
  ]

  return (
    <div id="proyectos" className={styles.main}>
      <TitleSection
        section={section}
        title="Projectos"
        description="Los proyectos en los que participe"
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
