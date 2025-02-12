import React from 'react'
import { Outlet} from 'react-router'
import { useEffect } from 'react';

const Main = () => {
   useEffect(() => {
    // Load the chatbot script dynamically
    const script = document.createElement('script');
    script.src = 'chatbot-one-sand-26.vercel.app';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div>
        <Outlet></Outlet>
       
    </div>
  )
}

export default Main
