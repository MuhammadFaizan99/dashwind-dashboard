import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.mailingList}>
        <p className={styles.mailingListTitle}>Join the Mailing List</p>
        <p className={styles.mailingListSubtitle}>
          Subscribe to our newsletter and receive 10% off on your first order.
        </p>
        <div className={styles.mailingListInner}>
          <input
            type="email"
            placeholder="yourname@yourdomain.com"
            className={styles.emailInput}
          />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      <div className={styles.siteMap}>
        <p className={styles.siteMapTitle}>The Small Print</p>
        <a href="#" className={styles.siteMapLink}>
          Contact
        </a>
        <a href="#" className={styles.siteMapLink}>
          Returns
        </a>
        <a href="#" className={styles.siteMapLink}>
          FAQs
        </a>
      </div>
      <div className={styles.socialMedia}>
        <p className={styles.socialMediaTitle}>Social Media</p>
        <a href="#" className={styles.socialMediaLink}>
          Instagram
        </a>
        <a href="#" className={styles.socialMediaLink}>
          Facebook
        </a>
        <a href="#" className={styles.socialMediaLink}>
          Twitter
        </a>
      </div>
    </div>
  );
}
