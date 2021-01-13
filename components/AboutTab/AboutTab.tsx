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
          Siempre supe que mi vida iba a estar relacionada con la tecnologia,hasta que encontre la
          programacion y no me separe mas. Aprendi la logica en la facultad en C#, pero como yo soy
          una persona muy ansiosa, y con muchas ganas aprender, incursione en el mundo javascript.
          <br />
          <br />
          Aprendi de forma autodidacta muchas librerias y frameworks de javascript, como por ejemplo
          React, NodeJS y ya hace mas de 1 año que vengo realizando paginas web responsives de forma
          freelance.
        </p>
      </div>
    </div>
  )
}
export default AboutTab
