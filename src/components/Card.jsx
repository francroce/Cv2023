import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col gap-5 w-64'>
        <img src={props.imagen} alt=""  className='w-12'/>
        <h4 className='font-bold text-xl'>{props.titulo}</h4>
        <p>{props.texto}</p>
    </div>
  )
}

export default Card