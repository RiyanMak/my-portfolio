import React from 'react';
import styles from './NameDisplay.module.css';

const NameDisplay =() => {
  return (
    <div className={styles.nameContainer}>
      <body>
          <p className={styles.name}>Hello, my name is Riyan Maknojia</p> 
      </body>
    </div>
  );
};

export default NameDisplay;