import './App.css'
import { useAppSelector } from './store.ts'
import { selectAppStatus } from './app-selectors.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'

export const App = () => {
const status = useAppSelector(selectAppStatus)

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
