import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const faqs = [
    { question: 'Do all shipments come with documentation?', answer: 'Yes, all shipments include the necessary documentation to ensure a smooth delivery and customs clearance, where applicable.' },
    { question: 'Are all logistics are covered?', answer: 'Yes, our logistics services cover everything from warehousing to transportation, ensuring your goods are handled efficiently from start to finish.' },
    { question: 'Where can I get support for account issues and questions?', answer: 'Currently, we do not offer international shipping. Our services are available domestically, focusing on providing the best possible delivery solutions within the country.' },
    { question: 'Does YR Wholesale ship internationally ?', answer: 'Answer for take-out food delivery.' },
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
