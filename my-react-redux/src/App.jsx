import {handleUp, handleDown, handleEditString} from './redux/store'
import { connect } from 'react-redux'


import logo from './logo.svg'
import './App.css'

function App({value}) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleUp}>up</button>
          <button type="button" onClick={handleDown}>down</button>

          count is: {value}
        </p>
        <input type="text" onChange={(event) => handleEditString(event.target.value)}/>
      </header>
    </div>
  )
}

export default connect(store => ({
  value: store.value
}))(App)
