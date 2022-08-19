import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://profedu.by/wp-content/uploads/2021/10/cropped-ripo-favicon.png'
                 alt='img'/>
        </header>
    );
};

export default Header;