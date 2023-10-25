import styles from './Services.module.css';
import imagemCaiaque from '../assets/img7.jpg';
import trilha47 from '../assets/torre47.jpg'
import trilhaagua from '../assets/trilha-dagua.jpg'



export function Services() {
    return(
        <div className={styles.container}>
        <h1 data-text="Nossos_Serviços...">Nossos_Serviços...</h1>
        <div className={styles.cardsContainer}>
          <section className={styles.card}>
            <img src={imagemCaiaque} alt="Passeio de caiaque" />
            <div className={styles.textOverlay}>
              <p>Texto 1</p>
            </div>
          </section>
          <section className={styles.card}>
            <img src={trilha47 } alt="Trilha da torre 47" />
            <div className={styles.textOverlay}>
              <p>Texto 2</p>
            </div>
          </section>
          <section className={styles.card}>
            <img src={trilhaagua} alt="Trilha D'agua" />
            <div className={styles.textOverlay}>
              <p>Texto 3</p>
            </div>
          </section>
        </div>
      </div>
       
    ) 
}