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
import React, { useState } from "react";
import ChatBot from "./ChatBot"; // Import chatbot component

const Main = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      {/* Main Content */}
      <div>
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isChatOpen ? "Close Chat" : "Open Chat"}
        </button>
      </div>

      {/* ChatBot Box */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "400px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <ChatBot />
        </div>
      )}
    </div>
  );
};

export default Main;
