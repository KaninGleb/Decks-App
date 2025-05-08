import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
}

type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

type Deck = {
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

type Author = {
  id: string
  name: string
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
