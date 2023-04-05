export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEED = 'succeed',
    FAILED = 'failed'
}

const initialState: InitialStateType = {
    status: Status.IDLE,
}

export const appReducer = (state = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

// actions============================================================

export const setAppStatusAC = (status: Status) =>
    ({type: 'APP/SET-STATUS', status} as const)

// types===========================================================

export type InitialStateType = {
    status: Status
}

export type AppReducerActionsType = SetAppStatusACType
export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>
