import React from 'react';
import styles from './Header.module.css'
import {useAppDispatch} from "../../hooks/hooks";
import {SelectedYearType, setYearAC} from "../../store/reducers/charts-reducer";

const Header = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (year: SelectedYearType) => {
        dispatch(setYearAC(year))
    }


    return (
        <header className={styles.header_container}>
            <button className={styles.btn} onClick={() => onClickHandler('2021')}>2021</button>
            <button className={styles.btn} onClick={() => onClickHandler('2022')}>2022</button>
            <button className={styles.btn} onClick={() => onClickHandler('2023')}>2023</button>
            <button className={styles.btn} onClick={() => onClickHandler('2024')}>2024</button>
        </header>
    );
};

export default Header;