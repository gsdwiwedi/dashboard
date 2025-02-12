import React from 'react'
import { Outlet} from 'react-router'
import { useEffect } from 'react';

const Main = () => {
 
  
  return (
    <div>
        <Outlet></Outlet>
       
    </div>
  )
 }
// import React from 'react'
// import { Outlet } from 'react-router'
// import { useEffect } from 'react';

// const Main = () => {
//   return (
//     <div>
//       <Outlet></Outlet>
      
//       {/* Add just the chat bot iframe */}
//       <div style={{
//         position: 'fixed',
//         bottom: '80px',
//         right: '20px',
//         width: '350px',
//         height: '500px',
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
