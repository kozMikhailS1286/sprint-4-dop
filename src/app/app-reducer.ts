export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionType): AppStateType => {
  switch (action.type) {
    case ("SET_ERROR/APP"): {
      return {
        ...state,
        //
      }
    }
    default:
      return state
  }
}


export type ActionType = ReturnType<typeof setAppAC>
                          | ReturnType<typeof setStatusAC>

export const setAppAC = (error: string | null) => ({type: "SET_ERROR/APP", error} as const)
export const setStatusAC = (status: string) => ({type: "SET_STATUS/APP", status} as const)