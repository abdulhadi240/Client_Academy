import Image from 'next/image'
import React from 'react'

const Block = ({Icon , title , text}) => {
  return (
    <div className='flex mt-4 gap-4 items-center'>
        <div>
            <Icon size={20}/>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl'>{title}</h1>
            <p className='text-xs max-w-56'>{text}</p>

        </div>
        
    </div>
  )
}

export default Block