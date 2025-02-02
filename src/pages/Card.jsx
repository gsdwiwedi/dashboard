import React from 'react'

const Card = ({item}) => {
  return (
    <div  className='h-[400px] w-[300px] bg-white mt-5 border-8 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-yellow-700'>

        <div className='font-semibold'>  {item.title.substring(0,30)}.... </div>
        <img  src={item.image} alt="logo" className='h-[300px]'></img>
        
    </div>
  )
}

export default Card