import React from "react";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <div className={styles.mainProduct}>
      <p className={styles.topQuote}>
        “My all-time favourite scent. It smells divine and lasts all day! A true
        and beautiful rose fragrance.”
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
          <h1 className={styles.title}>Pure Rose Essential Oil</h1>
          <p className={styles.price}>$29.00</p>
          <p className={styles.membership}>
            Jetpack Membership Error: jetpack-membership
          </p>
          <p className={styles.notice}>
            No plan was configured for this button. Edit this post and confirm
            that an existing payment plan is selected for this block.
          </p>
          <div className={styles.descriptionBlock}>
            <p className={styles.description}>
              A soft, floral scent to calm the body and mind.
            </p>
          </div>
          <p className={styles.shipping}>Shipping</p>
          <p className={styles.shippingNotice}>
            We ship our products worldwide, with a few shipping rules.
          </p>
        </div>
      </div>
      <p className={styles.bottomQuote}>
        “Rose essential oil is known for its moisturizing, comforting, and
        balancing properties.”
      </p>
    </div>
  );
}
