import React, { useEffect, useState } from "react";
import { styles, stylesModal } from "./styles/index";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import coupe from "../../../public/imageCars/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp";
import sedan from "../../../public/imageCars/2024_03_10_samie_dorogie_avto_v_mire-_13_.jpg";
import suv from "../../../public/imageCars/756129720103196.jpg";
import sports from "../../../public/imageCars/orig.webp";
import pickup from "../../../public/imageCars/otnyud-ne-bmw-top-10-samykh-dorogikh-mashin-mira-v-2022-godu-3-min.jpg";
import hatchback from "../../../public/imageCars/images.jfif";
import minivan from "../../../public/imageCars/2024_03_10_samie_dorogie_avto_v_mire-_5_.jpg";



const AuctionInfo = ({ className }) => {
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

  // imageCars = [sedan, coupe, suv, sports, pickup, hatchback, minivan];

  const imageCars = [
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-1.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-2.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-3.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-4.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-5.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-6.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-7.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-8.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-9.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-10.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-11.jpg" },
    { image_url: "https://mercury.bid.cars/1-63830794/2024-BMW-X3-5UX53DP09R9U65586-12.jpg" },
  ];

  const handleImageClick = (index) => { 
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`${styles.module} ${styles[className]}`}>
      <div className={styles.carInfo}>

      {isFullScreen ? '' :         <span className={styles.divider}></span>}
        <p className={styles.carInfoTitle}>AUCTION INFO</p>
        <div className={styles.carInfoList}>

          <div className={styles.carListIteme}>
          <li className={styles.carListItem}>
  <span>VIN: 5UX53DP09R9U65586</span>
</li>
<li className={styles.carListItem}>
  <span>Модель: 2024 BMW X3, Xdrive30I</span>
</li>
<li className={styles.carListItem}>
  <span>Основное повреждение: Front end</span>
</li>
<li className={styles.carListItem}>
  <span>Дополнительное повреждение: Отсутствует</span>
</li>
<li className={styles.carListItem}>
  <span>Пробег: 999,999 миль</span>
</li>
<li className={styles.carListItem}>
  <span>Пробег (км): ~1,609,344 км (предположительно)</span>
</li>
<li className={styles.carListItem}>
  <span>Тип потери: Не указан</span>
</li>
<li className={styles.carListItem}>
  <span>ACV (Оценочная стоимость): $58,994</span>
</li>
<li className={styles.carListItem}>
  <span>ERC (Оценка восстановления): $52,656</span>
</li>
<li className={styles.carListItem}>
  <span>Кузов: Внедорожник</span>
</li>
<li className={styles.carListItem}>
  <span>Цвет: Белый</span>
</li>
<li className={styles.carListItem}>
  <span>Двигатель: 2.0L, 4 цилиндра, 248 л.с.</span>
</li>
<li className={styles.carListItem}>
  <span>Трансмиссия: Автоматическая</span>
</li>
<li className={styles.carListItem}>
  <span>Тип топлива: Бензин</span>
</li>
<li className={styles.carListItem}>
  <span>Привод: Полный</span>
</li>
<li className={styles.carListItem}>
  <span>Аукцион: Copart (06.09.2024) — Продано</span>
</li>
<li className={styles.carListItem}>
  <span>Аукцион: Copart (23.09.2024) — Пробег 30,618 миль, Продано</span>
</li>

            </div>






        <div
        className={`${styles.container} ${
          isFullScreen ? styles.fullscreen : "" 
        }`}
      >
        {/* Шапка */}
        <header className={styles.header}>
          {isFullScreen ? <span className={styles.totalHours}>PHOTO</span> : <span>PHOTO</span>}
          
          <button
            className={styles.arrowButton}
            onClick={() => setIsFullScreen(!isFullScreen)}
          >
            {isFullScreen ? <FiX size={20} /> : <FiArrowUpRight size={20} />}
          </button>
        </header> 

        {/* Прогресс */}
       

        {isFullScreen ? '' :         <span className={styles.divider}></span>}

        {/* Галерея */}
        <div className={styles.gallerySection}>
        
         
        <div className={styles.gallery}>
  {imageCars
    .slice(0, isFullScreen ? imageCars.length : 3)
    .map((src, index) => (
      <img
        key={index}
        src={src.image_url}
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
      

        
      </div>
      

    </div>
  );
};

export default AuctionInfo;
