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
      <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam commodi cumque dolorum earum
        et, harum illum laudantium maiores minima obcaecati pariatur quam, tempore voluptates? Itaque nam obcaecati quo?
      </footer>
    </div>
  )
}
