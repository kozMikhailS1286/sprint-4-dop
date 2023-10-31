import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDesksResponse>('/decks');
  },
  addDeck(name: string) {
    return instance.post<Desk>('/decks', {
      name
    })
  }
}

export interface FetchDesksResponse {
  items: Desk[]
  pagination: Pagination
  maxCardsCount: number
}

export interface Desk {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}

export interface Author {
  id: string
  name: string
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
