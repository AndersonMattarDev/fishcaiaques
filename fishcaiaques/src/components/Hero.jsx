
import imagem from '../assets/logoatual.png'
import styles from './Hero.module.css'

export function Hero(){
    return (
        <section className={styles.container}>
            <div>                
                 <img src={imagem} alt="logo" className={styles.image} />
                 <p className={styles.credito}>Créditos da imagem</p>
                 <a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-canoagem_8115387.htm#query=caiaque&position=7&from_view=keyword&track=sph" className={styles.link}>Imagem de storyset</a> <span className={styles.credito}>no Freepik</span>
            </div>
        </section>
    )
}