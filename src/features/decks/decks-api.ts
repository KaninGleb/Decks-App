import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>(`/v2/decks`)
  },
  addDeck(payload: AddDeckPayload) {
    return instance.post<Deck>(`/v1/decks`, payload)
  },
}

export type AddDeckPayload = {
  name: string
}

export type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isFavorite: boolean
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type Author = {
  id: string
  name: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
