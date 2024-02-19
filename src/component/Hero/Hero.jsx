import React from "react";
import HeroStyles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={HeroStyles.heroContainer}>
      <div className={HeroStyles.overlay}>
        <div className={HeroStyles.heroContent}>
          <h1 className={HeroStyles.heading}>
            Y&R Wholesale
            <br />
            Your Gateway to Premium Products
          </h1>
          <p className={HeroStyles.subText}>
            Driving Products to Markets Nationwide
          </p>
          <button className={HeroStyles.contactButton}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
