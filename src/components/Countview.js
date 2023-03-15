import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../Slices/Numbers'

const Countview = () => {
    const mycount = useSelector(state => state.countnum.count)
    const myname = useSelector(state => state.countnum.name)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Count is: {mycount}{myname}</h1>
        <button onClick={() => dispatch(counterAction.Increament("Moin"))}>Increament</button>
        <button onClick={() => dispatch(counterAction.Decreament("Sid"))}>Decreament</button>
    </div>
  )
}

export default Countview
