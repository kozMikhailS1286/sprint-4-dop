import {Dispatch} from 'redux'
import { addDeckAC, DecksAction, setDecksAC } from './decks-reducer'
import { decksAPI } from './decks-api'




export const fetchDecksTC = () => {
  return (dispatch: Dispatch<DecksAction>) => {
    decksAPI.fetchDecks()
      .then((res) => {
        dispatch(setDecksAC(res.data.items))
      })
  }
}

export const addDeckTC = (name: string) => {
  return (dispatch: Dispatch<DecksAction>) => {
    decksAPI.addDeck(name)
      .then((res) => {
        dispatch(addDeckAC(res.data))
      })
  }
}