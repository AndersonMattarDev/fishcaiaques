import styles from './Services.module.css';
import { GoAlertFill } from "react-icons/go";
import imagemCaiaque from '../assets/caiaque.jpg';
import trilha47 from '../assets/torre47.jpg'
import trilhaagua from '../assets/trilha-dagua.jpg'



export function Services() {
    return(
        <div className={styles.container}>
          <section className={styles.titulo}>
            <span><GoAlertFill /></span>
            <h3>Passe o mouse ou toque na imagem do passeio desejado!</h3> 
            </section>
        <h1 data-text="Nossos_Serviços...">Nossos_Serviços...</h1>
        <div className={styles.cardsContainer}>
          <section className={styles.card}>
            <img src={imagemCaiaque} alt="Passeio de caiaque" />
            <div className={styles.textOverlay}>
              <h3>Aluguel e passeio de caiques e canoas</h3>
              <p>Na Fish Caiaques Ecoturismo, oferecemos aluguel e passeios de caiaques e canoas, 
                proporcionando uma experiência única em meio à natureza. Nossos equipamentos de alta qualidade estão 
                disponíveis para aluguel, perfeitos para aventureiros de todos os níveis. Se preferir uma experiência 
                guiada, nossos passeios levam você a paisagens deslumbrantes, enquanto nossos guias especializados 
                abrangem conhecimento sobre a ecologia local.Acreditamos no ecoturismo responsável, priorizando a 
                preservação ambiental. 
              </p>
              <strong>Ficha Técnica</strong>
              <ul>
                <li>Extensão: 2,2 km</li>
                <li>Grau de dificuldade: Médio</li>
                <li>Duração estimada: 4h (ida e volta)</li>                
              </ul>
            </div>
          </section>

          <section className={styles.card}>
            <img src={trilha47 } alt="Trilha da torre 47" />
            <div className={styles.textOverlay}>
               <h3>Trilha da Torre 47</h3>
              <p>Próxima do centro, a trilha passa pela histórica Ponte da Banana e adentra em uma densa 
                vegetação de Mata Atlântica e restinga. 
                O trajeto passa por um linhão de energia até a torre de transmissão 47. 
                E alcança a cachoeira que leva o mesmo nome da trilha. Lugar é ideal para rapel, trekking, 
                observação de aves, fotografia da natureza e banho de rio.
              </p>
              <strong>Ficha Técnica</strong>
              <ul>
                <li>Extensão: 2,2 km</li>
                <li>Grau de dificuldade: Médio</li>
                <li>Duração estimada: 4h (ida e volta)</li>                
              </ul>
            </div>
          </section>

          <section className={styles.card}>
            <img src={trilhaagua} alt="Trilha D'agua" />
            <div className={styles.textOverlay}>
            <h3>Trilha D&rsquo;agua</h3>
            <p>Localizada no bairro Mangue Seco, prima pelo caráter educativo. 
              Permite conhecer o processo de mudança da vegetação de Mata Atlântica preservada, passando pelo manguezal,
              restinga, mata paludosa, de encosta e ombrófila densa. Possui atrativos culturais, 
              como a passagem pela linha do bondinho da Usina Itatinga e a ponte de ferro do Rio Guaxanduva.
              Acrescente-se a aventura da travessia de barco pelo Rio Itapanhaú, na ida e na volta.
              </p>
              <strong>Ficha Técnica</strong>
              <ul>
                <li>Extensão: 2,7 m</li>
                <li>Grau de dificuldade: médio</li>
                <li>Duração estimada: 4h (ida e volta)</li>                
              </ul>
            </div>
          </section>
        </div>
             
      </div>   
       
    ) 
}