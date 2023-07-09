import React,{useContext,useState} from 'react'
import {CartContext} from '../CartContext';


const Card = (props) => {
  const [isAdding,setIsAdding] = useState(false);
  const {cart,setCart} = useContext(CartContext);
  
  
  const addTocart = (event,product) =>{
    event.preventDefault();


    let _cart = {...cart};
    if(!_cart.items){
      _cart.items = {}
    }
    if(_cart.items[product.id]){
      _cart.items[product.id] += 1;
    } else{
      _cart.items[product.id] = 1;
    }

  if(!_cart.totalItems){
    _cart.totalItems = 0;
  }  
  _cart.totalItems +=1;
  setCart(_cart);
  setIsAdding(true);
  setTimeout(()=>{
    
    setIsAdding(false);
  },1000)
};

   

   const {product} = props;
  return (
    <div className='bg-gray-100 rounded py-5 w-64'>
        <img className = "py-4 px-2 w-56 h-72" src={product.image} alt=""/>
        <div className='text-center'>
            <h2 className='py-2 font-bold text-lg'>{product.name}</h2>
            <span className='py-1 bg-gray-200 rounded-full text-sm px-4'>{product.description}</span>
        </div>
                
        <div className='flex justify-between items-center mt-4 mx-6' >
            <span>₹{product.price}</span>
            <button className={`${isAdding ? 'bg-green-500' : 'bg-red-500'} py-1 px-4 font-bold rounded-full text-white`} onClick={(e)=>{addTocart(e,product)}}>ADD{isAdding ? 'ED':''}</button>

        </div>
    </div>
  )
}

export default Card;