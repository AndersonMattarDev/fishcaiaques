import styles from './About.module.css'
export function About(){
    return ( 
        <section className={styles.container}>
            <div>
                <h1 className={styles.qsmos}>Quem Somos: </h1>
                <h2 className={styles.fish}>Fish Caiaques - Uma Jornada Rumo à Natureza</h2>

            </div>
        </section>
    )
}