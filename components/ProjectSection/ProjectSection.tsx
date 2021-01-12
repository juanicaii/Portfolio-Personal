import styles from './ProjectSection.module.css'
import TitleSection from '../TitleSection'

interface IProjectSection {
  section: string
}

const ProjectSection = ({ section }: IProjectSection) => {
  return (
    <div>
      <TitleSection
        section={section}
        title="Projectos"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been
          the industry"
      />
    </div>
  )
}
export default ProjectSection
