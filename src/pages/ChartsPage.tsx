import React from 'react';
import Header from "../layouts/header/Header";
import Main from "../layouts/main/Main";
import styles from "./ChartsPage.module.css";

const ChartsPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Main/>
        </div>
    );
};

export default ChartsPage;