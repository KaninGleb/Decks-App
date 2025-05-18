import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { SetAppErrorAC } from '../app-reducer.ts'

export const handleAppError = (dispatch: Dispatch, error: unknown) => {
  let errorMessage: string

  if (isAxiosError<ServerError>(error)) {
    errorMessage = error?.response?.data.errorMessages[0].message || error.message
  } else {
    errorMessage = (error as Error).message
  }

  dispatch(SetAppErrorAC(errorMessage))
}

type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}
