import React, { useState } from "react";
import styles from "./CarInfo.module.css";
import suv from "/public/suv.svg";
import sedan from "/public/sedan.svg";
import coupe from "/public/coupe.svg";
import sports from "/public/sports.svg";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import pickup from "/public/pickup.svg";
import hatchback from "/public/hatchback.svg";
import minivan from "/public/minivan.svg";
import document from "../../assets/text-document.svg";
import documentHover from "../../assets/text-document-hover.svg";


const carImages = {
  sedan,
  suv,
  coupe,
  sports,
  pickup,
  hatchback,
  minivan,
};

const DownloadButton = ({ isHovered }) => {
  return (
    <span className={styles.downloadButton}>
      <img
        className={styles.document}
        src={isHovered ? documentHover : document}
        alt="document" 
      />
    </span>
  ); 
};


const CarInfo = ({ className, carType }) => {
  const carImage = carImages[carType] || carImages.sedan;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${styles.module} ${styles[className]}`}>
      <div className={styles.carInfo}>
        <div className={styles.downloadButtonWrapper}>
      
          <button
            className={styles.arrowButton} 
            onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
          >
             <DownloadButton isHovered={isHovered} />
             
          </button>
        </div>

     
        <img className={styles.carImage} src={carImage} alt={carType} />
     
        <span className={styles.divider}></span>
        <div className={styles.carInfoWrapper}> 
          <p className={styles.carInfoTitle}>СOMPLETE SET OF THE CAR</p> 
          <ol className={styles.carInfoList}>
            <li className={styles.carListItem}>
              <span>Серия: G01 (MUE)</span>
            </li>
            <li className={styles.carListItem}>
              <span>Версия: M Sport</span>
            </li>

            <li className={styles.carListItem}>
              <span>Двигатель: 2.00 l / 185 kW (B46D)</span>
            </li>
            <li className={styles.carListItem}>
              <span>Привод: полный</span>
            </li>
            <li className={styles.carListItem}>
              <span>Коробка: автомат</span>
            </li>
            <li className={styles.carListItem}>
              <span>Цвет авто: Mineralweiß Metallic (A96)</span>
            </li>
            <li className={styles.carListItem}>
              <span>Салон: Sensatec Perforiert Canberrabeige (KHFY)</span>
            </li>
            <li className={styles.carListItem}>
              <span>Год: 07-11-2023</span>
            </li>
            <li className={styles.carListItem}>
              <span>М руль</span>
            </li>
            <li className={styles.carListItem}>
              <span>Ассистент вождения</span>
            </li>
            <li className={styles.carListItem}>
              <span>Individual shadow line</span>
            </li>
            <li className={styles.carListItem}>
              <span>Individual shadow line оптика</span>
            </li>
            <li className={styles.carListItem}>
              <span>Комфортный доступ</span>
            </li>
            <li className={styles.carListItem}>
              <span>Панорама</span>
            </li>
            <li className={styles.carListItem}>
              <span>Подсветка салона Ambient</span>
            </li>
            <li className={styles.carListItem}>
              <span>Беспроводная зарядка телефона</span>
            </li>
            <li className={styles.carListItem}>
              <span>Гальваника органов управления</span>
            </li>
            <li className={styles.carListItem}>
              <span>Декор планки Ясень серо-коричневый</span>
            </li>
            <li className={styles.carListItem}>
              <span>Диски 19" 887M</span>
            </li>
            <li className={styles.carListItem}>
              <span>Заводская тонировка AS3</span>
            </li>
            <li className={styles.carListItem}>
              <span>Контроль K</span>
            </li>
            <li className={styles.carListItem}>
              <span>Музыка HiFi</span>
            </li>
            <li className={styles.carListItem}>
              <span>Обогрев руля</span>
            </li>
            <li className={styles.carListItem}>
              <span>Обогрев сидений</span>
            </li>
            <li className={styles.carListItem}>
              <span>Фаркоп</span>
            </li>
            <li className={styles.carListItem}>
              <span>Электро Регулировка Спинки Зад. Сиденья</span>
            </li>
            <li className={styles.carListItem}>
              <span>Электро Сиденья с памятью</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;