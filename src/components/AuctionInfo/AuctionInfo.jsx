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
      <p className={styles.carInfoTitle}>VIN: 5UX53DP09R9U65586 / Модель: 2024 BMW X3, Xdrive30I </p>
      {isFullScreen ? '' :         <span className={styles.divider}></span>}
        <p className={styles.carInfoTitles}>AUCTION INFO</p>
        <div className={styles.carInfoList}>

          <div className={styles.carListIteme}>
          
  <li className={styles.carListItem}><span>Primary Damage: Front end</span></li>
  <li className={styles.carListItem}><span>Secondary Damage: None</span></li>
  <li className={styles.carListItem}><span>Odometer (km): Not specified</span></li>
  <li className={styles.carListItem}><span>Mileage: 999,999 miles</span></li>
  
  <li className={styles.carListItem}><span>Loss: Not specified</span></li>
  <li className={styles.carListItem}><span>ACV: $58,994</span></li>
  <li className={styles.carListItem}><span>ERC: $52,656</span></li>
  <li className={styles.carListItem}><span>Body Style: Not specified</span></li>
  <li className={styles.carListItem}><span>Exterior Color: White</span></li>
  <li className={styles.carListItem}><span>Engine: 2.0L, 4 cyl., 248HP</span></li>
  <li className={styles.carListItem}><span>Transmission: Automatic</span></li>
  <li className={styles.carListItem}><span>Fuel Type: Gasoline</span></li>
  <li className={styles.carListItem}><span>Drive Type: All wheel drive</span></li>
  
  <li className={styles.carListItem}><span>Auction: Copart</span></li>
  <li className={styles.carListItem}><span>Auction Date: 2024-09-06</span></li>
  <li className={styles.carListItem}><span>Odometer: Not specified</span></li>
  <li className={styles.carListItem}><span>Odometer Unit: Not specified</span></li>
  <li className={styles.carListItem}><span>Price: Not specified</span></li>
  <li className={styles.carListItem}><span>Status: Sold</span></li>

  <li className={styles.carListItem}><span>Auction: Copart</span></li>
  <li className={styles.carListItem}><span>Auction Date: 2024-09-23</span></li>
  <li className={styles.carListItem}><span>Odometer: 30,618 mi</span></li>
  <li className={styles.carListItem}><span>Price: Not specified</span></li>
  <li className={styles.carListItem}><span>Status: Sold</span></li>

            </div>

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
    // .slice(0, isFullScreen ? imageCars.length : 6)
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
          <div className={stylesModal.modalContent} onClick={(e) => e.stopPropagation()}>

            <img
            
  src={imageCars[selectedImage].image_url}
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
  );
};

export default AuctionInfo;
