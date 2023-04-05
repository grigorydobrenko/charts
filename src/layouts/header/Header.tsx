import React from 'react';
import styles from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {SelectedYearType, setYearAC} from "../../store/reducers/charts-reducer";
import Button from "../../components/button/Button";

const Header = () => {

    const dispatch = useAppDispatch()
    const year = useAppSelector(state => state.charts.selected_year)

    const onSelectYear = (year: SelectedYearType) => {
        dispatch(setYearAC(year))
    }

    return (
        <header className={styles.header_container}>
            <Button year={'2021'} selectedYear={year} onSelectYear={onSelectYear}/>
            <Button year={'2022'} selectedYear={year} onSelectYear={onSelectYear}/>
            <Button year={'2023'} selectedYear={year} onSelectYear={onSelectYear}/>
            <Button year={'2024'} selectedYear={year} onSelectYear={onSelectYear}/>
        </header>
    );
};

export default Header;