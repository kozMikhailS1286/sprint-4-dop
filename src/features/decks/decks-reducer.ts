import { Desk } from './decks-api'
import { setErrorAC, setStatusAC } from '../../app/app-reducer'


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
                        | ReturnType<typeof setStatusAC>
                        | ReturnType<typeof setErrorAC>


export const setDecksAC = (desks: Desk[]) => ({type: "DECKS/SET-DECKS", desks} as const)
export const addDeckAC = (deck: Desk) => ({type: "DECKS/ADD-DECK", deck} as const)
