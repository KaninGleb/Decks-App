import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { setDecksAC, addDeckAC, deleteDeckAC, updateDeckAC } from './decks-reducer.ts'
import { SetAppStatusAC } from '../../app/app-reducer.ts'
import { handleAppError } from '../../app/GlobalError/handleAppError.ts'

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
    dispatch(SetAppStatusAC('succeeded'))
    dispatch(updateDeckAC(res.data))
  } catch (error) {
    handleAppError(dispatch, error)
    dispatch(SetAppStatusAC('failed'))
  }
}
