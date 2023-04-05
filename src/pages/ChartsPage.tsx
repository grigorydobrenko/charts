import React from 'react';
import Header from "../layouts/header/Header";
import Main from "../layouts/main/Main";
import styles from "./ChartsPage.module.css";
import {useAppSelector} from "../hooks/hooks";
import {Status} from "../store/reducers/app-reducer";
import Loader from "../components/loader/Loader";

const ChartsPage = () => {

    const status = useAppSelector(state => state.app.status)

    return (
        <div className={styles.container}>
            <Header/>
            {(status === Status.LOADING) ? <Loader/> : <Main/>}
        </div>
    );
};

export default ChartsPage;