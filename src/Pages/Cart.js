import React,{useEffect,useState,useContext} from 'react';
import {CartContext} from '../CartContext';


const Cart = () => {

  const[products,setProducts] =useState([]);
  const { cart,setCart } = useContext(CartContext);
  

  

  return (

    !products ? <p className='text-center text-6xl py-80'>Cart is Empty</p>

    :


    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      <h1 className='my-12 font-bold'>Cart Items</h1>
      <ul>
        {
          products.map(product =>{
            return(
              <li className='mb-12' key = {product.id}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img className='h-16' src={product.image}alt/>
                    <span className='font-bold ml-4 w-48'>{product.name}</span>
                  </div>
                  <div>
                    <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none' >-</button>
                    <b className='px-4'>1</b>
                    <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>

                  </div>
                  <span>₹ {product.price} </span>
                  <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'  >Delete</button>
                </div>
            </li>
            )
          })
        }

      </ul> 
      <hr className='my-6'/>
      <div className='text-right'>
        <b>Grand Total:</b>₹
      </div>
      <div className='text-right mt-6'>
        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none' >Order Now</button>
      </div>

    </div>
    
  )
}

export default Cart