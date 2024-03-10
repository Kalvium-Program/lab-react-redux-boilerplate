import React from 'react'
import { counterAction,Selector } from './Redux/Reducer'
import { useDispatch,useSelector } from 'react-redux'
import './App.css'
const Counter = () => {
    const dispach = useDispatch()
    const count = useSelector(Selector)

    function HandleIncrease(){
        dispach(counterAction.Increment())
    }

    function HandleDecrement(){
        dispach(counterAction.Decrement())
    }
    return (
    <div className='body'>
      <h1>{count}</h1>
      <button onClick={HandleIncrease}>Like</button>
      <button onClick={HandleDecrement}>Unlike</button>
    </div>
  )
}

export default Counter