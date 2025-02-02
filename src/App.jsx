import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  return (
       <div>
            <div className='h-20 bg-indigo-700'>
                  <Header></Header>  
            </div>

            <div className='h-[100vh] flex'>
                  <div className='bg-red-400'> 
                        <Sidebar></Sidebar>
                  </div>

                  <div>
                       <Main></Main> 
                  </div>
            </div>

            {/* <div className='h-20 bg-indigo-600'> 
                 <Footer></Footer>
            </div> */}



       </div>
  )
}

export default App
