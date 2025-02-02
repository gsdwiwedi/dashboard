import React, { useRef, useState } from 'react'

const Weather = () => {
     const  [data, setData]  = useState([]);
    //  const [wind, setWind]  = useState('')
 
   
     const [temp, setTemp]  = useState('')
     const [desc, setDesc]  = useState('')
     const [wind, setWind]  = useState('')
     const location_bx  = useRef('')


     
    const  fetchWeather  = async()=>{
        const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
        const location = location_bx.current.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
        setData(await response.json())
        setWind(data.main.pressure)
        setTemp(data.main.temp)
        setDesc(data.weather[0].description)
        setWind(data.wind.speed)
    }


  return (
     <div>
         <div className='bg-sky-300 h-[500px] w-[500px] rounded-md  ml-80 mt-20 flex  flex-col items-center justify-center'>
                
                <div className=''> 
                      <input ref={location_bx} className='outline-none shadow-lg shadow-indigo-600-400 font-semibold p-1' type="text" placeholder='enter the loacation'></input>
                      <button className='bg-blue-600 p-1 text-white font-semibold '  onClick={fetchWeather} >Search</button>
                </div>

                <div>
                     <div>Pressure : {wind}</div>
                     <div>Temperature : {temp} </div>
                     <div>Description : {desc}</div>
                     <div>Wind: {wind} </div>
                </div>

         </div>

    </div>
  )
}

export default Weather