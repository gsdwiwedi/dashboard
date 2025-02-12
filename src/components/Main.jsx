// import React from 'react'
// import { Outlet} from 'react-router'
// import { useEffect } from 'react';

// const Main = () => {
 
  
//   return (
//     <div>
//         <Outlet></Outlet>
       
//     </div>
//   )
//  }
// import React from 'react'
// import { Outlet } from 'react-router'
// import { useEffect } from 'react';

// const Main = () => {
//   return (
//     <div>
//       <Outlet></Outlet>
//       <div> Hii </div>
//       {/* Add just the chat bot iframe */}
//       <div style={{
//         position: 'fixed',
//         bottom: '80px',
//         right: '20px',
//         width: auto,
//         height: auto,
//         zIndex: 1000,
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//         borderRadius: '10px',
//         overflow: 'hidden'
//       }}>
//         <iframe
//           src="https://chatbot-one-sand-26.vercel.app/"
//           style={{
//             width: '100%',
//             height: '100%',
//             border: 'none'
//           }}
//           title="Chat Bot"
//         />
//       </div>
//     </div>
//   )
// }

// export default Main

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const [chatHeight, setChatHeight] = useState('50px'); // Initially closed size

  useEffect(() => {
    const handleMessage = (event) => {
      // Ensure message is from our chatbot
      if (event.origin !== "https://chatbot-one-sand-26.vercel.app") return;

      // Update height based on received message
      if (event.data?.height) {
        setChatHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <Outlet />
      {/* Chatbot iframe */}
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '350px', // Fixed width
          height: chatHeight, // Dynamic height
          zIndex: 1000,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out', // Smooth transition
        }}
      >
        <iframe
          src="https://chatbot-one-sand-26.vercel.app/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Chat Bot"
        />
      </div>
    </div>
  );
};

export default Main;
