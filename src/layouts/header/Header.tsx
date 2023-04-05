import React from 'react';
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {SelectedYearType, setYearAC} from "../../store/reducers/charts-reducer";
import cn from 'classnames';


const Header = () => {

    const dispatch = useAppDispatch()
    const year = useAppSelector(state => state.charts.selected_year)

    const onClickHandler = (year: SelectedYearType) => {
        dispatch(setYearAC(year))
    }

    return (
        <header className={styles.header_container}>
            <button className={cn(styles.btn, {[styles.btn_active]: year === '2021'})}
                    onClick={() => onClickHandler('2021')}>2021
            </button>
            <button className={cn(styles.btn, {[styles.btn_active]: year === '2022'})}
                    onClick={() => onClickHandler('2022')}>2022
            </button>
            <button className={cn(styles.btn, {[styles.btn_active]: year === '2023'})}
                    onClick={() => onClickHandler('2023')}>2023
            </button>
            <button className={cn(styles.btn, {[styles.btn_active]: year === '2024'})}
                    onClick={() => onClickHandler('2024')}>2024
            </button>
        </header>
    );
};

export default Header;