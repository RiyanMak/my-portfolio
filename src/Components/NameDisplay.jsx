import React from 'react';
import styles from './NameDisplay.module.css';

const NameDisplay =() => {
  return (
    <div className={styles.nameContainer}>
      <body>
        <h1>
          Hello, my name is <span className={styles.name}>Riyan Maknojia</span>
        </h1>
      </body>
    </div>
  );
};

export default NameDisplay;