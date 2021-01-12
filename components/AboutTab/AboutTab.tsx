import styles from './AboutTab.module.css'

const AboutTab = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <div className={styles.avatar}>
        <img src="/imagen.jpg" alt="" />
      </div>
      <div className={styles.info}>
        <h5>
          <span>Juan Ignacio Seijas</span> - Desarollador FullStack Javascript
        </h5>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          <br />
          <br />
          voluptatem sequi nesciunt. Li Europan lingues es membres del sam familie. Lor separat
          existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          Li lingues differe solmen in li grammatica, e li plu commun vocabules.
        </p>
      </div>
    </div>
  )
}
export default AboutTab
