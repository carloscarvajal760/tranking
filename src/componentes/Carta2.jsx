import React from 'react'

import {Carta2abajo} from "./Carta2abajo"

import "../styles/Carta2.css"

function Carta2(props) {

 const hobby=props.hobby

 const hour=props.hour

 const last=props.last

 const theme='Carta2 ' + props.theme

 const imagenes=props.imagenes

  return (

    <div className={theme}>

        <div className='imgtrabajo'>

            <img src={imagenes} alt="" />

        </div>

        <Carta2abajo hobby = {hobby} hour={hour} last={last}/>

    </div>

  )

}
export {Carta2}
