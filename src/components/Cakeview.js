import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cakeAction } from '../Slices/Cakeslice'

const Cakeview = () => {
    const cakecount = useSelector(state => state.cake.numOfcake)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{cakecount}</h1>
      <button onClick={() => dispatch(cakeAction.cakeIncreament())}>Cakeincreament</button>
      <button onClick={() => dispatch(cakeAction.cakeDecreament())}>Cakedecreament</button>
    </div>
  )
}

export default Cakeview
