import React/* , {useState} */ from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from '../actions/count.actions'

export default function Counter() {
    // const [count, setCount] = useState(0);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    return (
        <div>
            {/* {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> */}
            {count.value}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}