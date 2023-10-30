import styles from './About.module.css';
import { useState } from 'react';


export function About(){
    const [hoveredDiv, setHoveredDiv] = useState (null);

    return ( 
        <div className={styles.wrapper}>            
            <div
             className={hoveredDiv === 1 ? styles.hovered : null}
             onMouseEnter={() => setHoveredDiv(1)}
             onMouseLeave={() => setHoveredDiv(null)}
             >
                <div className={styles.inner}>Quem Somos:</div>
                {hoveredDiv === 1 && <div className={styles.hoverText}>Somos uma agência apaixonada pelo espírito aventureiro e pela beleza das águas.
                 Na Fish Caiaques, dedicamos nossos dias a proporcionar experiências únicas em caiaques. 
                 Combinando paixão e expertise, estamos aqui para tornar cada aventura aquática memorável. 
                 Seja você um novato ou um remador experiente, estamos prontos para guiá-lo pelos mais deslumbrantes cenários naturais 
                 e explorar juntos as maravilhas escondidas de rios, lagos e mares. Junte-se a nós e descubra o mundo aquático de uma 
                 maneira que só o caiaque pode proporcionar</div>}                
             </div>   

              <div
             className={hoveredDiv === 2 ? styles.hovered : null}
             onMouseEnter={() => setHoveredDiv(2)}
             onMouseLeave={() => setHoveredDiv(null)}
             >
                <div className={styles.inner}>Missão:</div>
                {hoveredDiv === 2 && <div className={styles.hoverText}>Nossa missão na Fish Caiaques é proporcionar aventuras 
                aquáticas inesquecíveis a todos os amantes da natureza e da exploração. Com paixão e comprometimento, 
                buscamos compartilhar a beleza das águas, revelar os segredos dos rios, lagos e mares, e criar experiências únicas 
                em passeios com caiaques. Seja você um iniciante ou um remador experiente, estamos aqui para guiá-lo em 
                jornadas emocionantes e para ajudá-lo a descobrir o mundo aquático de uma maneira única. 
                Junte-se a nós enquanto exploramos as maravilhas da natureza e criamos memórias aquáticas que durarão para sempre.</div>}                
             </div>    

              <div
             className={hoveredDiv === 3 ? styles.hovered : null}
             onMouseEnter={() => setHoveredDiv(3)}
             onMouseLeave={() => setHoveredDiv(null)}
             >
                <div className={styles.inner}>Visão:</div>
                {hoveredDiv === 3 && <div className={styles.hoverText}>Nossa visão na Fish Caiaques é ser reconhecida como a principal
                 referência em aventuras aquáticas e aluguel de caiaques e canoas. Buscamos inspirar pessoas a se conectarem com a 
                 natureza, promovendo experiências enriquecedoras e sustentáveis. Queremos continuar a expandir nossas operações,
                 explorar novos destinos e compartilhar a beleza dos ambientes aquáticos com um público diversificado. 
                 Acreditamos que, por meio de nossa paixão, dedicação e excelência, podemos ajudar a todos a descobrir a 
                 magia das águas e a preservar esses tesouros naturais para as gerações futuras.</div>}                
             </div>      

              <div
             className={hoveredDiv === 4 ? styles.hovered : null}
             onMouseEnter={() => setHoveredDiv(4)}
             onMouseLeave={() => setHoveredDiv(null)}
             >
                <div className={styles.inner}>Valores:</div>
                {hoveredDiv === 4 && <div className={styles.hoverText}>
                    <h1>Nossos valores essenciais na Fish Caiaques:</h1>

                    <p>* Paixão pela Natureza</p>
                    <p>* Excelência em Serviço</p>
                    <p>* Sustentabilidade</p>
                    <p>* Inclusão e Diversidade</p>
                    <p>* Aventura Responsável</p>
                    <p>* Comunidade e Educação</p>
                    <p>* Respeito ao próximo</p>
                   
                    <h2>Esses princípios norteiam nossa missão de proporcionar experiências aquáticas excepcionais e sustentáveis.</h2>                           
                    
                </div>}                
             </div>           
        </div> 
    )
}