import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useState } from 'react'
import styles from './SkillsTab.module.css'
import ProgressProvider from '../ProgressProvider'
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
      <ProgressBar tec="NodeJS" percent={75} />
      <ProgressBar tec="HTML" percent={80} />
      <ProgressBar tec="CSS" percent={70} />
      <ProgressBar tec="SQL" percent={80} />
      <ProgressBar tec="PHP" percent={65} />
      <ProgressBar tec="GIT" percent={75} />
    </div>
  )
}
export default SkillsTab
