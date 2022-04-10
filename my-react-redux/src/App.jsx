import {increment, decrement} from './redux/counter'
import {editString} from './redux/string'
import { useSelector, useDispatch } from 'react-redux'
import Sum from './Sum'

import logo from './logo.svg'
import './App.css'

function App() {
  const counter = useSelector((state) => state.counter.value)
  const string = useSelector((state) => state.string.value)

  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>up</button>
          <button type="button" onClick={() => dispatch(decrement())}>down</button>

          count is: {counter}
        </p>
        <input type="text" onChange={(event) => dispatch(editString(event.target.value))}/>
        {string}
      <Sum/>
      </header>
    </div>
  )
}

export default App