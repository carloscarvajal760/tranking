import frente from "../images/image-jeremy.png"
import "../styles/Carta1top.css"
import React from 'react'

function Carta1top() {
  return (
<div className='Carta1top'>
<img src={frente} alt="" />
<div className='texto'>
<p>Report for</p>
<p>Jeremy Robson</p>
</div>
</div>
  )
}

export {Carta1top} 