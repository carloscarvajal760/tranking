import React from 'react'
import {Moleculas} from "./Moleculas"
import {Moleculas2} from "./Moleculas2"

function Organismo(props) {
  const back=props.back
  return (
    <div class="Organismo">
        <Moleculas back={back}/>
        <Moleculas2/>
    </div>
  )
}

export {Organismo}