import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <div className=' w-[200px] flex  flex-col items-center justify-center mt-10 gap-5'>

          <Link  className='bg-indigo-600  w-[100px] pr-3 pl-3 rounded-sm' to="/product">   Product</Link>
          <Link  className='bg-indigo-600  w-[100px]  pr-3 pl-3 rounded-sm' to="/weather">   Weather</Link>
          <Link  className='bg-indigo-600  w-[100px]  pr-3 pl-3 rounded-sm' to="/mail">   Mail</Link>
    </div>
  )
}

export default Sidebar