import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/store.ts'
import { decksApi } from '../decks-api.ts'
import { selectDecks } from '../decks-selectors.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import s from './DecksList.module.css'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])

  return (
    <ul className={s.list}>
      {decks?.map((deck) => <DeckItem key={deck.id} deck={deck} />)}
    </ul>
  )
}
