import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { styles, stylesModal } from "./styles/index";
// import {
//   coupe,
//   sedan,
//   suv,
//   sports,
//   pickup,
//   hatchback,
//   minivan,
// } from "../../../public/imageCars/index";
import coupe from "../../../public/imageCars/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp";
import sedan from "../../../public/imageCars/2024_03_10_samie_dorogie_avto_v_mire-_13_.jpg";
import suv from "../../../public/imageCars/756129720103196.jpg";
import sports from "../../../public/imageCars/orig.webp";
import pickup from "../../../public/imageCars/otnyud-ne-bmw-top-10-samykh-dorogikh-mashin-mira-v-2022-godu-3-min.jpg";
import hatchback from "../../../public/imageCars/images.jfif";
import minivan from "../../../public/imageCars/2024_03_10_samie_dorogie_avto_v_mire-_5_.jpg";

const ImageGallery = ({ className, imageCars }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(isFullScreen);

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden"; // Запрещаем прокрутку
    } else {
      document.body.style.overflow = ""; // Восстанавливаем прокрутку
    }

    return () => {
      document.body.style.overflow = ""; // Очистка эффекта при размонтировании
    };
  }, [isFullScreen]);

  imageCars = [sedan, coupe, suv, sports, pickup, hatchback, minivan];
  const handleImageClick = (index) => { 
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
          {isFullScreen ? <span className={styles.totalHours}>VIN: DAS32432F23</span> : <span>MJ FAST HOURS</span>}
          
          <button
            className={styles.arrowButton}
            onClick={() => setIsFullScreen(!isFullScreen)}
          >
            {isFullScreen ? <FiX size={20} /> : <FiArrowUpRight size={20} />}
          </button>
        </header> 

        {/* Прогресс */}
        <div className={styles.progress}>
        {isFullScreen ? '' : <span className={styles.hours}>6.9</span>}
        {isFullScreen ?  ''  : <span className={styles.totalHours}>15H</span>}
      
        </div>

        {isFullScreen ? '' :         <span className={styles.divider}></span>}

        {/* Галерея */}
        <div className={styles.gallerySection}>
        {isFullScreen ? '' :  <p className={styles.title}>LATEST WORKS</p>}
         
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
