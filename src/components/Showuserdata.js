// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fetchusers } from '../Slices/Userslice'

const Showuserdata = () => {
   const userdata = useSelector(state => state.userdata)
   const dispatch = useDispatch()
  //  useEffect(() =>{
  //     dispatch(Fetchusers())
  //  },[])
  return (
    <div>
      <button onClick={() => dispatch(Fetchusers())}>FetchUsers</button>
      {userdata.loading ? <h1>Loading...</h1>: ""}
      {userdata.data.map((user) => (
        <ul key={user.id}>
        <li>{user.name}</li>
        <li>{user.username}</li>
        </ul>
        ))}
    </div>
  )
}

export default Showuserdata
