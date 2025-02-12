import React from 'react'
import { Outlet} from 'react-router'

const Main = () => {
  return (
    <div>
        <Outlet></Outlet>
         <a
        href="https://chatbot-one-sand-26.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="chatbot-link"
      >
         Chat with us!
      </a>
    </div>
  )
}

export default Main
