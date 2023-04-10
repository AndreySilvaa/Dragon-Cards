import React, { useEffect, useState } from 'react'

// DATA
import {dragons} from '../data/dragons'

// CSS
import './CardModal.css'

// COMPONENTS
import Card from './Card'

const CardModal = (props) => {
    const [dragon, setDragon] = useState(null)
    const {id} = props  

    useEffect(() => {
        for (let i of dragons) {
            if(i.id === id){
                setDragon(i)
            }
        }

    }, [id])

  return (
    <div className='card-modal'>
        {dragon && (
            <Card modal={null} id={null} name={dragon.name} element={dragon.element} hp={dragon.hp_score} image={dragon.image} atk_fis={dragon.atk_fis} atk_ele={dragon.atk_ele} vel={dragon.vel} powers={dragon.powers} def={dragon.def} weak={dragon.weak}/>
        )}
    </div>
  )
}

export default CardModal