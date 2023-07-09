import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from '../CartContext';


const Navbar = () =>{
    const {cart} = useContext(CartContext);

    return(
        <>
            <nav className="w-full bg-black mx-auto flex items-center justify-between z-10 ">
                    <span className="text-4xl ml-8 font-bold text-white">MobiKart</span>
                    <ul className="flex text-white items-center px-28 py-6 space-x-11 justify-end text-xl">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li>
                            <Link to="/cart">
                                <div className="bg-red-600 py-1 px-3 rounded-2xl flex">
                                    Cart 
                                    <span className="ml-2">{cart.totalItems ? cart.totalItems:0}</span>
                                    
                                </div>
                            </Link>
                        </li>
                    </ul>
                

            </nav>
        </>
    )
}
export default Navbar;