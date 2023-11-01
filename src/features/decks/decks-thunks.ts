import {Dispatch} from 'redux'
import { addDeckAC, DecksAction, setDecksAC } from './decks-reducer'
import { decksAPI } from './decks-api'
import { setErrorAC, setStatusAC } from '../../app/app-reducer'




export const fetchDecksTC = () => async (dispatch: Dispatch<DecksAction>) => {
    dispatch(setStatusAC("loading"))
  try {
    await decksAPI.fetchDecks()
      .then((res) => {
        dispatch(setDecksAC(res.data.items))
        dispatch(setStatusAC("idle"))
      })
  } catch (e) {
    dispatch(setErrorAC("Some error"))
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