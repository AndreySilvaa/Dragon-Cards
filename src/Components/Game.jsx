import React from 'react'
import { useState, useRef } from 'react'

// DATA
import { dragons } from '../data/dragons'
import { probabilityDragons } from '../data/probalilityDragons'

// COMPONENTS
import Card from '../Components/Card'
import CardModal from './CardModal'

// CSS
import './Game.css'

//ICONS
import { Bars } from 'react-loading-icons'
import {FaRegWindowClose} from 'react-icons/fa'

const Game = () => {

    const [luckDragons, setLuckDragons] = useState([])
    const [load, setLoad] = useState(false)
    const modalElement = useRef()
    const [idModal, setIdModal] = useState(null)

    function chooseDragons(){
        let luck = []
        setLuckDragons([])
        setLoad(true)

        for(let i = 1; i <= 5; i++){
            let choose = Math.ceil(Math.random()*probabilityDragons.length-1)
            luck.push({id: probabilityDragons[choose]})
        }

        
        setTimeout(async function(){
           for(let i of luck){
               for (let i2 of dragons) {
                   if(i.id === i2.id){
                       setLuckDragons((prev) => ([...prev, i2]))
                   }
               }
           }
           setLoad(false)
       }, 2000)

       console.log(luckDragons)
        
    }

    // MODAL
    function modalWindow(id){
        if(id !== undefined){
            setIdModal(id)
        }

        modalElement.current.classList.toggle("close")
    }

    

  return (
    <div className='game'>

        <div className='modal close' ref={modalElement}>
            <strong onClick={() => modalWindow()}>X</strong>
            <CardModal id={idModal}/>
        </div>

            <div className='attack-defense'>
                <button className='atk' onClick={chooseDragons}>JOGAR</button>
            </div>

            <div className='cards-container'>
                {luckDragons.length === 0 & load === false && (
                    <>
                        <div className='card-empty'/>
                        <div className='card-empty'/>
                        <div className='card-empty'/>
                        <div className='card-empty'/>
                        <div className='card-empty'/>
                    </>
                )}

                {load === true && (
                    <>
                        <div className='card-empty'><Bars /></div>
                        <div className='card-empty'><Bars /></div>
                        <div className='card-empty'><Bars /></div>
                        <div className='card-empty'><Bars /></div>
                        <div className='card-empty'><Bars /></div>
                    </>
                )}



                {luckDragons.length > 0 && (
                    <>
                        {luckDragons.map((dragon) => (
                            <Card modal={modalWindow} id={dragon.id} name={dragon.name} element={dragon.element} hp={dragon.hp_score} image={dragon.image} atk_fis={dragon.atk_fis} atk_ele={dragon.atk_ele} vel={dragon.vel} powers={dragon.powers} def={dragon.def} weak={dragon.weak}/>
                        ))}
                    </>
                )}
            </div>
    </div>
  )
}

export default Game