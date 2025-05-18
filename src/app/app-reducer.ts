export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

export const SetAppStatusAC = (status: RequestStatusType) =>
  ({
    type: 'APP/SET-STATUS',
    status,
  }) as const

export const SetAppErrorAC = (error: string | null) =>
  ({
    type: 'APP/SET-ERROR',
    error,
  }) as const

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS': {
      return { ...state, status: action.status }
    }

    case 'APP/SET-ERROR': {
      return { ...state, error: action.error }
    }

    default:
      return state
  }
}

type AppStateType = typeof initialState

type ActionsType = UpdateLoadingStatusAT | SetAppErrorAT

type UpdateLoadingStatusAT = ReturnType<typeof SetAppStatusAC>
type SetAppErrorAT = ReturnType<typeof SetAppErrorAC>
