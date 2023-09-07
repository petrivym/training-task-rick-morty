import './App.scss';
import {useEffect} from "react"
import { getCharacters } from './services/networking/character.services';


function App() {
  useEffect(() => {
    getCharacters.then(e => console.log(e))
  }, [])
  return (
    <div>

    </div>
  )
}

export default App
