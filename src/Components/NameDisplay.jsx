import React from 'react';
import styles from './NameDisplay.module.css';

const NameDisplay =() => {
  return (
    <div className={styles.nameContainer}>
        <h1>
            <body className={styles.name}>Riyan Maknojia</body>
        </h1>
    </div>
  );
};

export default NameDisplay;