import React, { useEffect, useState } from 'react'
import Card from './Card';


const Product = () => {
  const [data, setData]   =  useState([]);
  const [loading , setLoading]   = useState(true);
      useEffect( 
            ()=>{
                    const loadData  = async()=>{
                        let response    =   await   fetch('https://fakestoreapi.com/products')
                        setData(await response.json());
                        setLoading(false)
                        console.log(data);
                    }

                    loadData();
            }, [data]
      )

      

      if(loading){
         return   <div>   loading .......</div>
      }else{

        return (
            <div className='flex flex-wrap  gap-5 mt-10 ml-5'>
                {
                         data.map(
                               (item)=>{
                                        return <Card item={item}> </Card>
                               }
                         )
                }
        
            </div>
          )

      }
    

 
}

export default Product