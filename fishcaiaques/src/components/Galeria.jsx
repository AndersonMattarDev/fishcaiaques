import { useState } from 'react';
import styles from '../components/Galeria.module.css';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';
import slide1 from '../assets/img-galery1.jpg';
import slide2 from '../assets/img-galery2.jpg';
import slide3 from '../assets/img-galery3.jpg';
import slide4 from '../assets/img-galery4.jpg';
import slide5 from '../assets/img-galery5.jpg';
import slide6 from '../assets/img-galery6.jpg';
import slide7 from '../assets/img-galery7.jpg';
import slide8 from '../assets/img-galery8.jpg';
import slide9 from '../assets/img-galery9.jpg';
import slide10 from '../assets/img-galery10.jpeg';
import slide11 from '../assets/img-galery11.jpeg';
import slide12 from '../assets/img-galery12.jpg';

const imageWidth = 530; // Largura de cada imagem
const gap = 15; // Espaçamento entre imagens

export function Galeria() {
  const [currentItem, setCurrentItem] = useState(0);

  const items = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
  ];

  const handlePrevious = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % items.length);
  };

  const transformX = -(currentItem * (imageWidth + gap));

  return (
    <div className={styles.container}>
      <h1>Galeria de Aventuras</h1>
      <button
        className={`${styles.arrowLeft} ${styles.control}`}
        aria-label="Previous Image"
        onClick={handlePrevious}
      >
        <FaStepBackward />
      </button>

      <button
        className={`${styles.arrowRight} ${styles.control}`}
        aria-label="Next Image"
        onClick={handleNext}
      >
        <FaStepForward />
      </button>

      <div className={styles.galleryWrapper}>
        <div
          className={styles.gallery}
          style={{ transform: `translateX(${transformX}px)` }}
        >
          {items.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`slide ${index + 1}`}
              className={`${styles.item} ${
                index === currentItem ? styles.currentItem : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
