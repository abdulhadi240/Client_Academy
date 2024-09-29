import Image from 'next/image'
import React from 'react'

const Cities = ({image , name , country}) => {
  return (
    <div className='flex flex-col gap-1 text-xs text-start w-36'>
        <Image src={image} width={100} height={100} alt='cities' className='rounded-xl'/>
        <h1 className='font-semibold'>{name}</h1>
        <p>{country}</p>
    </div>
  )
}

export default Cities