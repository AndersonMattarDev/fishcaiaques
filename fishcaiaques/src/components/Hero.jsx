
import imagem from '../assets/logo.png'
import styles from './Hero.module.css'

export function Hero(){
    return (
        <section className={styles.container}>
            <div>
                 <img src={imagem} alt="logo" className={styles.image} />
            </div>
        </section>
    )
}