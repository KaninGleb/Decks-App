import { Dispatch } from 'redux'
import { AddDeckPayload, decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (payload: AddDeckPayload) => (dispatch: Dispatch) => {
  decksApi.addDeck(payload).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
