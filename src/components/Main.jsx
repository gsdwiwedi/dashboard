// import React from 'react'
// import { Outlet} from 'react-router'
// import { useEffect } from 'react';

// const Main = () => {
 
  
//   return (
//     <div>
//         <Outlet></Outlet>
       
//     </div>
//   )
// }

// export default Main
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';

const Main = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Outlet />
      
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 999
        }}
      >
        {isChatOpen ? 'Close Chat' : 'Chat with us'}
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '350px',
          height: '500px',
          zIndex: 1000,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          <iframe
            src="https://chatbot-one-sand-26.vercel.app/"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title="Chat Bot"
          />
        </div>
      )}

      {/* Background Overlay */}
      {isChatOpen && (
        <div
          onClick={() => setIsChatOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 998
          }}
        />
      )}
    </div>
  );
};

export default Main;
