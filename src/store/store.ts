import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer, AppReducerActionsType} from "./reducers/app-reducer";
import {chartsReducer, ChartsReducerActionsType} from "./reducers/charts-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    charts: chartsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppActionsType = AppReducerActionsType | ChartsReducerActionsType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>