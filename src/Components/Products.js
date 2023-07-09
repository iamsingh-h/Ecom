import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'
function Products() {
    const API = process.env.REACT_APP_BACKEND
    const [products, setProducts] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`${API}/product/`)
        .then((res)=>{
          let data = res?.data;
          setProducts(data)
        })
        .catch((err)=>setError(err));
    
      }, [])
    console.log("Products",products);


  return (
    <div className='container mx-auto pb-24'>
        <h1 className='text-3xl my-8 mt-10'>Explore <span className='font-bold'>Bestsellers</span></h1>
        <div className='grid grid-cols-4 my-8 gap-24'>
            {
                products?.map((product,index)=>{
                    return (
                      <div key={index} className="mb-4">
                        <Card product={product}/>
                      </div>
                )})

            }
            
        </div>

    </div>
    
  )

}
export default Products;