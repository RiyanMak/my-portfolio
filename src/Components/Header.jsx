import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
            <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>{
                    <a href="logo.png">My Portfolio</a>
                }</div>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header> 
    );
};

export default Header;