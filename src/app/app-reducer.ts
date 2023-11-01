export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export type setStatusActionType = ReturnType<typeof setStatusAC>
export type setErrorActionType = ReturnType<typeof setErrorAC>


export const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null
}

type initialStateType = typeof initialState

export const appReducer = (state: initialStateType  = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case ("SET_STATUS/APP"):
      return {...state, status: action.status}
    case ("SET_ERROR/APP"):
      return {...state, error: action.error}
    default:
      return state
  }
}



export const setStatusAC = (status: RequestStatusType) => ({type: "SET_STATUS/APP", status} as const)
export const setErrorAC = (error: string | null) => ({type: "SET_ERROR/APP", error} as const)


export type ActionType = setStatusActionType | setErrorActionType