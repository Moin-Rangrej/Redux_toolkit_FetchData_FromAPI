import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const count = useSelector(state => state.countnum.count)
    const cakecount = useSelector(state => state.cake.numOfcake)
  return (
    <div style={{backgroundColor : 'lightblue',height:"100px",width:"auto",margin:'20px'}}>
      <div style={{backgroundColor: "green",height:'25px',width:'100px',textAlign:'center',borderRadius:'10px',float:'right',margin:'10px'}}>Cart
        <button style={{backgroundColor:"Highlight",color:'white'}}>{count + cakecount}</button>
      </div>
    </div>
  )
}

export default Navbar
