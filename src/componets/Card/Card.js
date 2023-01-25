import React from 'react'
import { useEffect,useState } from 'react'

export default function Card() {
    const [isLoaded,setIsloaded]=useState(false);
    const [error,setError]=useState(null);
    const [items,setItems]=useState(null);


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
    else{
return (
    <div className='grid justify-center grid-cols-3 p-2'>{
        items.map((data,index) => (
            

            <div class="max-w-sm ml-2  mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.carName}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.detail}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            
            
            
            
            
                
                </div>
        ))
    }

    </div>
       

   
 
  )

    }
}
