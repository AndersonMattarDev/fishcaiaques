import React, { useState, useEffect, useMemo } from 'react';
import styles from '../components/Galeria.module.css';
import img1 from '../assets/img-galery1.jpg';
import img2 from '../assets/img-galery2.jpg';
import img3 from '../assets/img-galery3.jpg';

export function Galeria() {
  const images = useMemo(() => [img1, img2, img3], []); // Memoize the images array

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          className={index === currentIndex ? styles.active : ''}
        />
      ))}
    </div>
  );
}