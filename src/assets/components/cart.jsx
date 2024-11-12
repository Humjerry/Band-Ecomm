import React from 'react'
import SearchImg from "../images/btn-32.svg"
import CartImg from "../images/li (1).png"
import Favicon from "../images/li.png"

function cart() {
  return (
    <>
    <div className="logindiv flex">
      <img src={SearchImg} alt="" />
      <img src={Favicon} alt="" />
      <img src={CartImg} alt="" />
</div>
</>
  )
}

export default cart
