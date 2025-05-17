import { Dispatch } from 'redux'
import { decksAPI, FetchDecksResponse, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { SetAppStatusAC } from '../../app/app-reducer.ts'
import { isAxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(SetAppStatusAC('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(SetAppStatusAC('succeeded'))
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    dispatch(SetAppStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  dispatch(SetAppStatusAC('loading'))
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
    dispatch(SetAppStatusAC('succeeded'))
  } catch (e) {
    let errorMessage: string

    if (isAxiosError<ServerError>(e)) {
      errorMessage = e.response ? e.response?.data?.errorMessage[0]?.message : e.message
    } else {
      errorMessage = (e as Error).message
    }
    console.log(errorMessage)
    dispatch(SetAppStatusAC('failed'))
  }
}

type ServerError = {
  errorMessage: Array<{ field: string; message: string }>
}
