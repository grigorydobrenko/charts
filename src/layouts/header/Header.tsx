import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header_container}>
            <button>2021</button>
            <button>2022</button>
            <button>2023</button>
            <button>2024</button>
        </header>
    );
};

export default Header;