import React from 'react'
import { Outlet} from 'react-router'

const Main = () => {
   useEffect(() => {
    // Load the chatbot script dynamically
    const script = document.createElement('script');
    script.src = '//code.tidio.co/your-tidio-key.js';
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
