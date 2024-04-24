import React from "react";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111977.86304834442!2d-122.70947682843575!3d45.5154580924677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a4af3f5045ef%3A0x4ef545c62f44214a!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1644550808923!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className={styles.mapIframe}
        ></iframe>
      </div>
      <div className={styles.contactInfo}>
        <h2>Contact us</h2>
        <p>
        Visit our enrollment page to submit your inquiry, and we will respond promptly. Below, you'll find our contact details for any additional questions or concerns you may have. We also offer specialized consultations to help tailor our products and services to meet your business needs. We value all our clients and look forward to assisting you!
        </p>
        <div className={styles.mainContactDetails}>
          <div className={styles.contactDetails}>
            <IoMdCall className={styles.icon} />
            <span className={styles.description}>+1 (541) 952-1811</span>
          </div>
          <div className={styles.contactDetails}>
            <IoMdMail className={styles.icon} />
            <span className={styles.description}>Wholesaleunited.com</span>
          </div>
          <div className={styles.contactDetails}>
            <IoMdPin className={styles.icon} />
            <span className={styles.description}>Portland, OR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
