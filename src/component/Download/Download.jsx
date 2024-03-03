// Download.js
import React from 'react';
import styles from './Download.module.css';
import { Apple, Android } from '@mui/icons-material';

export default function Download() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div >
            <h1 className={styles.title}>Download it now.</h1>
        </div>
        <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.appStoreButton}`}>
            <Apple className={styles.buttonIcon}/> App Store 
          </button>
          <button className={`${styles.button} ${styles.googlePlayButton}`}>
            <Android className={styles.buttonIcon}/> Google Play 
          </button>
        </div>
        <div className={styles.helperText}>
          Add some helper text here to explain the finer details of your product or service.
        </div>
      </div>
    </div>
  );
}
