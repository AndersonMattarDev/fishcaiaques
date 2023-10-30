import styles from '../components/Galeria.module.css'
import slide1 from '../assets/img-galery1.jpg'
import slide2 from '../assets/img-galery2.jpg'
import slide3 from '../assets/img-galery3.jpg'
import slide4 from '../assets/img-galery4.jpg'
import slide5 from '../assets/img-galery5.jpg'
import slide6 from '../assets/img-galery6.jpg'

export function Galeria(){

  return(
    <div className={styles.slider}>

      <div className={styles.slides}>
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <input type="radio" name="radio-btn" id="radio5" />
        <input type="radio" name="radio-btn" id="radio6" />
      </div>

      <div className={styles.slide}>
        <img src={slide1} alt="slide1" />
      </div>
      <div className={styles.slide}>
        <img src={slide2} alt="slide2" />
      </div>
      <div className={styles.slide}>
        <img src={slide3} alt="slide3" />
      </div>
      <div className={styles.slide}>
        <img src={slide4} alt="slide4" />
      </div>
      <div className={styles.slide}>
        <img src={slide5} alt="slide5" />
      </div>
      <div className={styles.slide}>
        <img src={slide6} alt="slide6" />
      </div>

      <div className={styles.naviAuto}>
        <div className={styles.autoBtn1}></div>
        <div className={styles.autoBtn2}></div>
        <div className={styles.autoBtn3}></div>
        <div className={styles.autoBtn4}></div>
        <div className={styles.autoBtn5}></div>
        <div className={styles.autoBtn6}></div>
      </div>

      <div className={styles.manualNav}>
        <label htmlFor="radio1" className={styles.manualBtn}></label>
        <label htmlFor="radio2" className={styles.manualBtn}></label>
        <label htmlFor="radio2" className={styles.manualBtn}></label>
        <label htmlFor="radio3" className={styles.manualBtn}></label>
        <label htmlFor="radio4" className={styles.manualBtn}></label>
        <label htmlFor="radio5" className={styles.manualBtn}></label>
        <label htmlFor="radio6" className={styles.manualBtn}></label>
      </div>

    </div>
  )
}
