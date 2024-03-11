import React from 'react'
import { Action,Selector } from './Redux/Reducer'
import { useDispatch,useSelector } from 'react-redux'
import './App.css'
const Counter = () => {
    const dispach = useDispatch()
    const count = useSelector(Selector)

    function HandleInc(){
        dispach(Action.Increment())
    }

    function HandleDec(){
        dispach(Action.Decrement())
    }
    return (
    <div className='body'>
      <h1>{count}</h1>
      <button onClick={HandleInc}>Like</button>
      <button onClick={HandleDec}>Unlike</button>
    </div>
  )
}

export default Counter
