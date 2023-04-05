import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import cn from "classnames";
import styles from "./Button.module.css";
import {SelectedYearType} from "../../store/reducers/charts-reducer";

const Button: React.FC<PropsType> = ({year, selectedYear, onSelectYear, ...restProps}) => {
    return (
        <button className={cn(styles.btn, {[styles.btn_active]: year === selectedYear})}
                onClick={() => onSelectYear(year)} {...restProps}>{year}
        </button>
    );
};

export default Button;

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonPropsType & {
    year: SelectedYearType
    selectedYear: SelectedYearType
    onSelectYear: (year: SelectedYearType) => void
}