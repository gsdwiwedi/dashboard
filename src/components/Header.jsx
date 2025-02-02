import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-3'>
          <div className='font-semibold text-white'>
              <div>  Softcrayons Tech Solution</div>
              <div>{new Date().toISOString()}</div>
          </div>

          <div className='flex'>
               <input className='outline-none font-semibold'></input>
               <button className='bg-red-400 p-1 hover:bg-blue-600'>search</button>
             
          </div>

         
    </div>
  )
}

export default Header