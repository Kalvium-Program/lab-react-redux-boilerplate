import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import { Provider } from 'react-redux'
import {mystore} from './Redux/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store ={mystore}>
      <Counter />   
    </Provider>
    </>
  )
}

export default App
