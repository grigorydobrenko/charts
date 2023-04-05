import {AppThunk} from "../store";
import axios, {AxiosError} from "axios";
import {chartsApi} from "../../service/charts-api";
import {setAppStatusAC, Status} from "./app-reducer";

const initial_year = '2021'

const initialState: InitialStateType = {
    volume_marginality_relation: null,
    selected_year: initial_year
}

export const chartsReducer = (state = initialState, action: ChartsReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "CHARTS/SET-CHARTS": {
            return {...state, volume_marginality_relation: action.charts}
        }
        case "CHARTS/SET-YEAR": {
            return {...state, selected_year: action.year}
        }
        default:
            return state
    }
}

//  actions============================================================

export const setChartsAC = (charts: Charts) =>
    ({type: 'CHARTS/SET-CHARTS', charts} as const)

export const setYearAC = (year: SelectedYearType) =>
    ({type: 'CHARTS/SET-YEAR', year} as const)

//  thunks============================================================

export const getChartsTC = (): AppThunk => async (dispatch) => {

    try {
        dispatch(setAppStatusAC(Status.LOADING))

        const response = await chartsApi.getCharts()
        const charts = response.data.volume_marginality_relation

        dispatch(setChartsAC(charts))
        dispatch(setAppStatusAC(Status.SUCCEED))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            console.log(err)
        }
        dispatch(setAppStatusAC(Status.FAILED))
    } finally {
        dispatch(setAppStatusAC(Status.IDLE))
    }
}


// types===========================================================

export type InitialStateType = {
    volume_marginality_relation: Charts | null
    selected_year: SelectedYearType
}

type Charts = {
    "2021": YearChartType
    "2022": YearChartType
    "2023": YearChartType
    "2024": YearChartType
}

type YearChartType = {
    vds_wsub: PointType[],
    vds_sub: PointType[],
}

export type PointType = {
    name: string,
    x: number,
    y: number
}

export type ChartsReducerActionsType = SetChartsACType | setYearACType
export type SetChartsACType = ReturnType<typeof setChartsAC>
export type setYearACType = ReturnType<typeof setYearAC>

export type SelectedYearType = '2021' | '2022' | '2023' | '2024'
