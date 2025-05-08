import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return { ...state, decks: action.decks }
    }

    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({
  type: 'SET_DECKS' as const,
  decks,
})

export type setDecksAT = ReturnType<typeof setDecksAC>

type DecksActions = setDecksAT
