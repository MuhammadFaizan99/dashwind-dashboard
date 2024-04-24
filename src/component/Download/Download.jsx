// Download.js
import React from 'react';
import styles from './Download.module.css';
import { Apple, Android } from '@mui/icons-material';

export default function Download() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div >
            <h1 className={styles.title}>Create an Account.</h1>
        </div>
        <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.appStoreButton}`}>
            <Apple className={styles.buttonIcon}/> Sign Up 
          </button>
          <button className={`${styles.button} ${styles.googlePlayButton}`}>
            <Android className={styles.buttonIcon}/> Login 
          </button>
        </div>
        <div className={styles.helperText}>
        </div>
      </div>
    </div>
  );
}
