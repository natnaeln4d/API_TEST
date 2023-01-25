import React from 'react'
import { useEffect,useState } from 'react'
import NavBar from '../NavBar';

export default function Home() {
    const [isLoaded,setIsloaded]=useState(false);
    const [error,setError]=useState(null);
    const [items,setItems]=useState(null);
    const [current,setCurrent] = useState(0)
    const num = 10;
    // const [num,setNum] = useState(0)

    
    const next = () => {
        setCurrent( current === num ? 0 : current + 1)
        console.log(current)
       }
     
       const prev = () => {
         setCurrent(current === 0 ? num : current - 1)
         console.log(current)
       }
    useEffect(() => {
       
      
      
          const fetchData = async () => {
            try {
              
             
              const response = await fetch("https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96",{
                method:"GET",
                headers:{
                  'content-Type':'application/json',
                }
              })
              const json = await response.json();
              console.log(json)
               console.log(json.cars[0].carName)
            
            
              setIsloaded({
                  isLoaded:json.status
              })
                setItems(json.cars)
              console.log(json);
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();
      }, []);
      if (error) {
        return <div>
          <NavBar />
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span>  Error: {error.message}.
</div>
         </div>;
      }
      else if (!isLoaded) {
        return <div>
            
            <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
  <span class="font-medium">!</span> Loading...
</div>
          </div>;
      }
      else
  return (
    <div>
 {items.map((item,index) => (
    
        current === index &&

    
    
<div id="controls-carousel" class="relative" data-carousel="static">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

    {console.log(item.images[0])}
         
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src={item.images[0]} alt = {item.images[0]} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
        
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
    <img src={item.images[1]} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            {/* <img src={item.cars[1].images} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/> */}
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src={item.images[2]} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            {/* <img src={item.cars.images} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/> */}
        </div>
      
       
    </div>

    <button onClick={ prev } type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={ next } type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
    
 
  ))}
      
    </div>
  )
}
