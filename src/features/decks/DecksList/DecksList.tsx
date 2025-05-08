import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../app/store.ts'
import { decksApi } from '../decks-api.ts'

export const DecksList = () => {
  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      console.log(res.data.items)
    })
  }, [])

  return <ul className={s.list}></ul>
}
