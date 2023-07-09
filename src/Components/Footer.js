import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faTwitter,faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{

    return(
        <>
            <footer className="w-full bg-black mx-auto flex items-center justify-between py-24">
                        <div className="w-1/3 float-left ml-10 text-white">
                            <span className="text-4xl ml-20 py-8 font-bold">MobiKart</span><br/>
                            <span className="text-lg ml-8 font-semibold">Subscribe to our email alerts!</span>
                            <input type="email" placeholder="Enter your email address" className="rounded-lg text-left py-3 px-16"/>
                        </div>

                        <div className="w-1/3 float-left text-center  text-white text-2xl">
                            <p className="text-transform: uppercase font-semibold">connect with us</p>
                            <div  className="flex space-x-6 justify-center py-4">
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        
                        </div>
                        <div className="w-1/3 float-right text-white ml-32">
                            <span className="font-semibold text-2xl">Mobi Kart</span>
                            <ul className="text-xl space-y-2">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Blog</li>
                                <li>News</li>
                                <li>Careers</li>
                                <li>Our Team</li>
                            </ul>
                        </div>
        

            </footer>
        </>
    )
}
export default Footer;