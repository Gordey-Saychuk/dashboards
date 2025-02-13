import React, { useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { styles, stylesModal } from "./styles/index";
import {
  coupe,
  sedan,
  suv,
  sports,
  pickup,
  hatchback,
  minivan,
} from "../../../public/imageCars/index";
const ImageGallery = ({ className, imageCars }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(isFullScreen);

  imageCars = [sedan, suv, coupe, sports, pickup, hatchback, minivan];
  const handleImageClick = (index: any) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`${styles.module} ${styles[className]}`}>
      <div
        className={`${styles.container} ${
          isFullScreen ? styles.fullscreen : ""
        }`}
      >
        {/* Шапка */}
        <header className={styles.header}>
          <span>MJ FAST HOURS</span>
          <button
            className={styles.arrowButton}
            onClick={() => setIsFullScreen(!isFullScreen)}
          >
            {isFullScreen ? <FiX size={20} /> : <FiArrowUpRight size={20} />}
          </button>
        </header>

        {/* Прогресс */}
        <div className={styles.progress}>
          <span className={styles.hours}>6.9</span>
          <span className={styles.totalHours}>15H</span>
        </div>
        <span className={styles.divider}></span>

        {/* Галерея */}
        <div className={styles.gallerySection}>
          <p className={styles.title}>LATEST WORKS</p>
          <div className={styles.gallery}>
            {imageCars.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Car ${index + 1}`}
                onClick={() => isFullScreen && handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Модальное окно */}
        {selectedImage !== null && (
          <div className={stylesModal.modalOverlay} onClick={closeModal}>
            <div className={stylesModal.modalContent}>
              <img
                src={imageCars[selectedImage]}
                alt={`Work ${selectedImage + 1}`}
              />
              <button className={stylesModal.closeButton} onClick={closeModal}>
                <FiX size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
