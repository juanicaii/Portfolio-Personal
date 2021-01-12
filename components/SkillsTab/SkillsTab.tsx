import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import styles from './SkillsTab.module.css'

interface IProgressBar {
  tec: string
  percent: number
}
const ProgressBar = ({ tec, percent }: IProgressBar) => {
  return (
    <div className={styles.progress}>
      <p style={{ textAlign: 'center' }}>{tec}</p>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: `var(--colorRed)`,
          textColor: 'black',
        })}
        className={styles.width}
        value={percent}
        text={`${percent}%`}
      />
    </div>
  )
}
const SkillsTab = () => {
  return (
    <div className={styles.container}>
      <ProgressBar tec="ReactJS" percent={90} />
      <ProgressBar tec="NodeJS" percent={75} />
      <ProgressBar tec="HTML" percent={80} />
      <ProgressBar tec="CSS" percent={70} />
      <ProgressBar tec="MySQL" percent={80} />
      <ProgressBar tec="PHP" percent={65} />
    </div>
  )
}
export default SkillsTab
