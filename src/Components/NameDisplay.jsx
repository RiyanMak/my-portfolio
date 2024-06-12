import React from 'react';
import styles from './NameDisplay.module.css';

const NameDisplay =() => {
  return (
    <div className={styles.nameContainer}>
      <body>
          <p className={styles.name}>Riyan Maknojia</p> 
          <p className={styles.nameabout1}>Hello! I'm a Student,</p>
          <p className={styles.nameabout2}>Machine Learning Developer, and</p>
          <p className={styles.nameabout3}>Entrepreneur</p>
      </body>
    </div>
  );
};

export default NameDisplay;