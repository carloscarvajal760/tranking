import React from 'react'

import puntos from "../images/icon-ellipsis.svg"

import '../styles/Carta2abajo.css'

function Carta2abajo(props) {

  const hobby=props.hobby

  const hour=props.hour

  const last=props.last

  return (

    <div className='Carta2abajo'>

        <div>

            <div className='texto1'><span>{hobby}</span></div>

           

            <div><img src={puntos} alt="" /></div>

           

        </div>

        <div>

            <span className='texto2'>{hour}</span>

            <span className='texto3'>{`Last Week - ${last}`}</span>

        </div>

    </div>

  )

}



export {Carta2abajo}