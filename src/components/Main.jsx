import React from 'react'
import { Outlet} from 'react-router'

const Main = () => {
  return (
    <div>
        <Outlet></Outlet>
      <a>https://chatbot-one-sand-26.vercel.app/</a>
       <a href="https://chatbot-one-sand-26.vercel.app/" rel="noopener noreferrer">
        Go to Example App
      </a>
    </div>
  )
}

export default Main
