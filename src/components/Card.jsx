import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col gap-2 md:gap-5 w-64 justify-center items-center md:items-start'>
        {props.children}
        <h4 className='font-bold md:text-2xl md:text-left text-center'>{props.titulo}</h4>
        <p className='opacity-70 md:text-lg md:text-left text-center'>{props.texto}</p>
    </div>
  )
}

export default Card