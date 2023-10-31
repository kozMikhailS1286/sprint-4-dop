import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../decks-thunks'

export const useFetchDesks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decks.decks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  return {
    decks
  }
}