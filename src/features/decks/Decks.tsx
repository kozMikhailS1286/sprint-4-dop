import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import {LinearProgress} from "@mui/material";
import { useAppSelector } from '../../app/store'

export const Decks = () => {

  const status = useAppSelector(state => state.app.status)

  return (
    <div>
      <h1>Decks 🦝</h1>
      {status == "loading" && <LinearProgress /> }
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
