import React from "react";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <div className={styles.mainProduct}>
      <p className={styles.topQuote}>
      "An expansive array of wholesale offerings awaits you. From diverse products to superior quality, we cater to the needs of retailers seeking variety and excellence in their inventory."
      </p>
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img
            src="../../../assets/product.png"
            alt="Rose Essential Oil"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Welcome to our Wholesale Emporium!</h1>
          <p className={styles.membership}>
            Why you should go with Y&R Wholesale?
          </p>
          <p className={styles.notice}>
          You can streamline your wholesale procurement process by sourcing all your needs from one reliable supplier
          </p>
          <div className={styles.descriptionBlock}>
            <p className={styles.description}>
              You can also request products for us to provide in our catalogs
            </p>
          </div>
          <p className={styles.shipping}>Shipping</p>
          <p className={styles.shippingNotice}>
            We ship our products nationwide, with a few shipping rules.
          </p>
        </div>
      </div>
    </div>
  );
}
