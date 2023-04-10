import React from 'react'

// CSS
import './card.css'

// Geral Icons
import {AiFillHeart} from 'react-icons/ai'
import {GiAxeSword} from 'react-icons/gi'
import {GiFeatheredWing} from 'react-icons/gi'

// Elements Icons
import {GiCelebrationFire} from 'react-icons/gi'
import {FaSnowflake} from 'react-icons/fa'
import {GiMetalBar} from 'react-icons/gi'
import {GiCrystalGrowth} from 'react-icons/gi'
import {GiCapeArmor} from 'react-icons/gi'
import {GiDeadWood} from 'react-icons/gi'
import {GiHolosphere} from 'react-icons/gi'
import {GiLaserSparks} from 'react-icons/gi'
import {GiLightningFrequency} from 'react-icons/gi'
import {GiWaterBolt} from 'react-icons/gi'

const Card = (props) => {

    const {id, modal, name, element, hp, image, atk_fis, atk_ele, vel, powers, def, weak} = props

    const icons = {0: <GiAxeSword className='atk-fis-icon'/>, 1: <GiCelebrationFire className='fire'/>, 2: <FaSnowflake className='ice'/>, 
      3: <GiMetalBar className='metal'/>, 4: <GiCrystalGrowth className='crystal'/>, 5: <GiCapeArmor className='war'/>, 6: <GiDeadWood className='wood'/>,
      7: <GiHolosphere className='ligth'/>, 8: <GiLaserSparks className='darkness'/>, 9: <GiLightningFrequency className='lightning'/>, 10: <GiWaterBolt className='water'/>, 11: <GiFeatheredWing className='wing'/>, 
    }

  return (

    
    <div key={id} className='card' onClick={modal !== null ? () => modal(id) : console.log(name)}>
        <div className='intro'>
          <h2> DRAGÃO {name}</h2>
          <div className='status'>
            <div className='hp'><AiFillHeart className='hp-icon'/> {hp}</div>
            <div className='atk-fis'><GiAxeSword className='atk-fis-icon'/> {atk_fis}</div>
            <div className='atk-ele'>{icons[element]} {atk_ele}</div>
          </div>
        </div>
        <img src={image} alt={name} />
        <div className='atributes'>
          <div className='powers'>PODERES: {powers.length > 0 && powers.map((num) => (icons[num]))}</div>
          <div className='def'> DEFESA: {def.length > 0 && def.map((num) => (icons[num]))}</div>
          <div className='weak'>FRAQUEZA: {weak.length > 0 && weak.map((num) => (icons[num]))}</div>
        </div>
    </div>
  )
}

export default Card