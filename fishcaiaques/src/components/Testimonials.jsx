import { FaQuoteLeft } from "react-icons/fa";
import styles from '../components/Testimonials.module.css';
import imgpeq from '../assets/pequiniTV.png';
import imgpeq1 from '../assets/raphaelDep.png';
import imgpeq2 from '../assets/alvesDep.png';

export function Testimonials() {
    return(
        <section className={styles.container}>
            <h1>Depoimentos de <span>Clientes</span></h1>
           
            <div className={styles.dep}>
                <div className={styles.item}>
                    <FaQuoteLeft className={styles.aspa} />
                <blockquote className={styles.txt}>
                    <p>O passeio é super incrível, imersão total na natureza. O passeio é super tranquilo e contemplativo,
                     não oferece perigos durante as remadas pois o rio é bem tranquilo e boa parte do percurso é raso.
                    </p>
                </blockquote>
                <figcaption className={styles.figure}>
                    <img src={imgpeq} alt="Pequini" />                
                <div>Pequini</div>
                <div><a href="https://www.google.com/maps/reviews/@-23.832207,-46.168531,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUN1dTdMcGFREAE!2m1!1s0x0:0x6158df699f47367a?hl=pt-BR&entry=ttu">Google Maps PequiniTV</a></div>
                </figcaption>
                </div>

                <div className={styles.item}>
                <FaQuoteLeft className={styles.aspa} />
                <blockquote className={styles.txt}>
                    <p>Atendimento de qualidade e uma ótima opção de passeio para todas as idades! 
                        SEGURANÇA TOTAL... super recomendo!
                    </p>
                </blockquote>
                <figcaption className={styles.figure}>
                    <img src={imgpeq1} alt="Raphael" />                
                <div>Raphael Roberto</div>
                <div><a href="https://www.google.com/maps/contrib/104626285674447724561/place/ChIJLbtMyy79zZQRejZHn2nfWGE/@-23.832207,-46.1659561,17z/data=!3m1!4b1!4m8!1m7!3m6!1s0x94cdfd2ecb4cbb2d:0x6158df699f47367a!2sFish+Caiaques!8m2!3d-23.832207!4d-46.1659561!16s%2Fg%2F11q2k32pqg?hl=pt-BR&entry=ttu">Google Maps Raphael Roberto</a></div>
                </figcaption>
                </div>
                 
                <div className={styles.item}>
                <FaQuoteLeft className={styles.aspa} />
                <blockquote className={styles.txt}>
                    <p>Experiência incrível, 8 anos em Bertioga e não tinha conhecido ainda, vale muito a pena, 
                        você fica livre com o caiaque sem hora de voltar, já no meio da mata é um silêncio incrível, 
                        só se escuta a natureza!
                    </p>
                </blockquote>
                <figcaption className={styles.figure}>
                    <img src={imgpeq2} alt="Alves" />                
                <div>Alves</div>
                <div><a href="https://www.google.com/maps/contrib/106480583636511213159/reviews/@-23.5638017,-46.4952456,9z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=pt-BR&entry=ttu">Google Maps Alves</a></div>
                </figcaption>
                </div>
            </div> 
           
                </section>
    )
}