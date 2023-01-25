import React from 'react'
import { useEffect,useState } from 'react'

export default function Carcard() {
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
            

            <div class="w-full mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg" src={data.images[0]} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.carName}</h5>
                </a>
                <li class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.features[0]}</li>
                <li class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.features[1]}</li>
                <li class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.features[2]}</li>
               
              
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{data.carPrice} $</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
        ))
    }

    </div>
       

)
 
  

}
}
