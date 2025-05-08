import { DeckItem } from './DeckItem/DeckItem.tsx'
import s from './DecksList.module.css'
import { useFetchDecksList } from './useFetchDecks.ts'

export const DecksList = () => {
  const { decks } = useFetchDecksList()

  return (
    <ul className={s.list}>
      {decks?.map((deck) => {
        return <DeckItem key={deck.id} deck={deck} />
      })}
    </ul>
  )
}
