
import imagem from '../assets/logoatual.png'
import styles from './Hero.module.css'

export function Hero(){
    return (
        <section className={styles.container}>
            <div>                
                 <img src={imagem} alt="logo" className={styles.image} />
                
            </div>
            <div className={styles.txt}>
                <h1>Seja Bem Vindo... <span>Aventureiro!!!</span></h1>
            </div>
        </section>
    )
}