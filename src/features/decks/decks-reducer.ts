import { Desk } from './decks-api'


const initialState = {
  decks: [] as Desk[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksAction): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return {
        ...state,
        decks: action.desks,
      }
    case 'DECKS/ADD-DECK':
      return {
        ...state,
        decks: [action.deck, ...state.decks]
      }
    default:
      return state
  }
}

export type DecksAction = ReturnType<typeof setDecksAC>
                        | ReturnType<typeof addDeckAC>


export const setDecksAC = (desks: Desk[]) => ({type: "DECKS/SET-DECKS", desks} as const)
export const addDeckAC = (deck: Desk) => ({type: "DECKS/ADD-DECK", deck} as const)
