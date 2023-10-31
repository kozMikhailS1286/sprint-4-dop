import { Desk } from './decks-api'

const initialState = {
  decks: [] as Desk[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DesksAction): DecksState => {
  switch (action.type) {
    case "DESKS/SET-DESKS":
      return {
        ...state,
        decks: action.desks
      }
  }
  return state
}

type DesksAction = ReturnType<typeof setDesksAC>


export const setDesksAC = (desks: Desk[]) => ({type: "DESKS/SET-DESKS", desks} as const)
