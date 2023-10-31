import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDesks } from './DeckItem/useFetchDesks'

export const DecksList = () => {


  const {decks} = useFetchDesks()

  return <ul className={s.list}>
    {decks.map(deck => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
  </ul>
}
