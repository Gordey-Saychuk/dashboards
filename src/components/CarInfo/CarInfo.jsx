import React from "react";
import styles from "./CarInfo.module.css";
import suv from "/public/suv.svg";
import sedan from "/public/sedan.svg";
import coupe from "/public/coupe.svg";
import sports from "/public/sports.svg";
import pickup from "/public/pickup.svg";
import hatchback from "/public/hatchback.svg";
import minivan from "/public/minivan.svg";

const carImages = {
  sedan,
  suv,
  coupe,
  sports,
  pickup,
  hatchback,
  minivan,
};

const CarInfo = ({ className, carType }) => {
  const carImage = carImages[carType] || carImages.sedan;

  return ( 
    <div className={`${styles.module} ${styles[className]}`}>
      <div className={styles.carInfo}>
      <img className={styles.carImage} src={carImage} alt={carType} />
      <div className={styles.carInfoWrapper}>
        <h2 className={styles.carInfoTitle}>Car Information</h2>
        <ol className={styles.carInfoList}>
          <li className={styles.carListItem}>
            <span>Make: Tesla</span>
          </li>
          <li className={styles.carListItem}>
            <span>Model: Model S</span>
          </li>

          <li className={styles.carListItem}>
            <span>Year: 2021</span>
          </li>
          <li className={styles.carListItem}>
            <span>Color: Red</span>
          </li>
          <li className={styles.carListItem}>
            <span>License Plate: 123456</span>
          </li>
          <li className={styles.carListItem}>
            <span>Insurance: Yes</span>
          </li>
          <li className={styles.carListItem}>
            <span>Model: Model S</span>
          </li>

          <li className={styles.carListItem}>
            <span>Year: 2021</span>
          </li>
          <li className={styles.carListItem}>
            <span>Color: Red</span>
          </li>
          <li className={styles.carListItem}>
            <span>License Plate: 123456</span>
          </li>
          <li className={styles.carListItem}>
            <span>Insurance: Yes</span>
          </li>
        </ol>
      </div>
      </div>
    </div> 
  );
};

export default CarInfo;