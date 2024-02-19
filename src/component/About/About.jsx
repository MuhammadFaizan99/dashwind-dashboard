// About.jsx
import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.content}>
        This is an example of a page. Unlike posts, which are displayed on your
        blog’s front page in the order they’re published, pages are better suited
        for more timeless content that you want to be easily accessible, like your
        About or Contact information. Click the Edit link to make changes to this
        page or add another page.
      </p>
      <div className={styles.footer}>
      <a href="https://wordpress.com" className={styles.blogLink} target="_blank" rel="noopener noreferrer">
  Blog at WordPress.com.
</a>
      </div>
    </div>
  );
}
