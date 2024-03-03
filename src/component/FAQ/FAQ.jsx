import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const faqs = [
    { question: 'Can I book a same-day delivery?', answer: 'Yep, We get it — life happens and Taskers are here to help. Maybe you thought you’d make it to the pharmacy and something came up, or your friends are stopping by and you want some chips and guac — whatever the situation, there’s a Tasker for that.' },
    { question: 'Can I schedule a contactless delivery?', answer: 'Answer for contactless delivery.' },
    { question: 'Do I have to be home for pick-up/delivery?', answer: 'Answer for home presence during delivery.' },
    { question: 'Can someone pick-up and deliver my take-out food?', answer: 'Answer for take-out food delivery.' },
  ];

export default function FAQ() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className={styles.faqLayout}>
      <div className={styles.faqContainer}>
      <h1 className={styles.faqHeading}>FAQ</h1>
        <p className={styles.faqSampleText}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openFAQIndex === index ? <ExpandLess className={styles.icon} /> : <ExpandMore className={styles.icon} />}
            </button>
            <p className={`${styles.faqAnswer} ${openFAQIndex === index ? styles.faqAnswerOpen : ''}`}>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className={styles.faqImage}>
        <img src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/6299863bfc6e59dc973b2eca/pexels-photo-4247766.jpeg" alt="FAQ Illustration" />
      </div>
    </div>
  );
}
