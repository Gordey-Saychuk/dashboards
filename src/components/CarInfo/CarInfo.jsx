import React from "react";
import styles from "./CarInfo.module.css";
import suv from "/public/suv.svg";
import sedan from "/public/sedan.svg";
import coupe from "/public/coupe.svg";
import sports from "/public/sports.svg";
import pickup from "/public/pickup.svg";
import hatchback from "/public/hatchback.svg";
import minivan from "/public/minivan.svg";
import document from "../../assets/text-document.svg";


const carImages = {
  sedan,
  suv,
  coupe,
  sports,
  pickup,
  hatchback,
  minivan,
};

const DownloadButton = () => {
  return (
    <button className={styles.downloadButton}>
      {/* <svg
        width="32px"
        height="32px"
        viewBox="0 -0.5 21 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>download [#1452]</title> <desc>Created with Sketch.</desc>{" "}
          <defs> </defs>{" "}
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            {" "}
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-379.000000, -480.000000)"
              fill="#506385"
            >
              {" "}
              <g id="icons" transform="translate(56.000000, 160.000000)">
                {" "}
                <path
                  d="M333.5,336.211 L328.3109,331.54 L329.7536,330.086 L332.45,332.514 L332.45,325 L334.55,325 L334.55,332.514 L337.2464,330.086 L338.6891,331.54 L333.5,336.211 Z M325.1,338 L341.9,338 L341.9,322 L325.1,322 L325.1,338 Z M323,340 L344,340 L344,320 L323,320 L323,340 Z"
                  id="download-[#1452]"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg> */}
      <img className={styles.document}  src={document} alt="document" />
    </button>
  );
};

const CarInfo = ({ className, carType }) => {
  const carImage = carImages[carType] || carImages.sedan;

  return (
    <div className={`${styles.module} ${styles[className]}`}>
      <div className={styles.carInfo}>
        <div className={styles.downloadButtonWrapper}>
          <DownloadButton />
        </div>
        <img className={styles.carImage} src={carImage} alt={carType} />
        <hr className={styles.divider} />
        <div className={styles.carInfoWrapper}>
          <h2 className={styles.carInfoTitle}>Сomplete set of the car</h2>
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