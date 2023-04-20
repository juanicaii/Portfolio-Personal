import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import ProgressProvider from '../ProgressProvider'
import styles from './SkillsTab.module.css'

interface IProgressBar {
  tec: string
  percent: number
}

const ProgressBar = ({ tec, percent }: IProgressBar) => {
  return (
    <div className={styles.progress}>
      <p style={{ textAlign: 'center' }}>{tec}</p>
      <ProgressProvider valueStart={10} valueEnd={percent}>
        {(value) => (
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `var(--colorRed)`,
              textColor: 'black',
            })}
            value={value}
            className={styles.width}
            text={`${value}%`}
          />
        )}
      </ProgressProvider>
    </div>
  )
}
const SkillsTab = () => {
  return (
    <div className={styles.container}>
      <ProgressBar tec="ReactJS" percent={90} />
      <ProgressBar tec="NodeJS" percent={90} />
      <ProgressBar tec="VueJS" percent={60} />
      <ProgressBar tec="React Native" percent={70} />
      <ProgressBar tec="CSS" percent={70} />
      <ProgressBar tec="SQL" percent={85} />
      <ProgressBar tec="NoSQL" percent={80} />
      <ProgressBar tec="GIT" percent={80} />
    </div>
  )
}
export default SkillsTab
