import React from 'react'
import { Outlet, Link } from 'react-router'

const Main = () => {
  return (
    <div>
        <Outlet></Outlet>
      <Link>https://chatbot-one-sand-26.vercel.app/</Link>
    </div>
  )
}

export default Main
