import {AppThunk} from "../store";
import axios, {AxiosError} from "axios";
import {chartsApi} from "../../service/charts-api";

const initialState: InitialStateType = {
    volume_marginality_relation: null,
}

export const chartsReducer = (state = initialState, action: ChartsReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "CHARTS/SET-CHARTS": {
            return {...state, volume_marginality_relation: action.charts}
        }
        default:
            return state
    }
}

//  actions============================================================

export const setChartsAC = (charts: Charts) =>
    ({type: 'CHARTS/SET-CHARTS', charts} as const)

//  thunks============================================================

export const getChartsTC = (): AppThunk => async (dispatch) => {

    try {
        // dispatch(setAppStatusAC('loading'))
        const response = await chartsApi.getCharts()
        const charts = response.data.volume_marginality_relation
        dispatch(setChartsAC(charts))
        // dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            console.log(err)
        }
    }
}


// types===========================================================

export type InitialStateType = {
    volume_marginality_relation: Charts | null
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

export type ChartsReducerActionsType = SetChartsACType
export type SetChartsACType = ReturnType<typeof setChartsAC>
