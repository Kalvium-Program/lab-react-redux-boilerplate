import React from 'react';
import { Increment, Decrement, Selector } from './Redux/Reducer'; // Import Increment, Decrement directly
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const Counter = () => {
    const dispatch = useDispatch(); // Corrected typo in variable name
    // const count = useSelector(Selector);

    // function handleInc() {
    //     dispatch(Increment());
    // }

    // function handleDec() {
    //     dispatch(Decrement());
    // }

    const [count, setCount] = React.useState(0);
    const handleInc = () => {
        setCount(count + 1);
    }
    const handleDec = () => {
        setCount(count - 1);
    }


    console.log(count);
    return (
        <div className='body'>
            <h1>{count}</h1> {/* Display the count */}
            <button onClick={handleInc}>Like</button>
            <button onClick={handleDec}>Unlike</button>
        </div>
    );
}

export default Counter;
