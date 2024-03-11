import './App.css'
import Counter from './Counter'
import { Provider } from 'react-redux'
import {myCountstore} from './Redux/Store'

function App() {
  return (
    <>
    <Provider store ={myCountstore}>
      <Counter />   
    </Provider>
    </>
  )
}

export default App
