import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/solid';
import "./Banner.css"

const Banner = () => {
    const handleClick = () => {
        window.scroll({
            top: 500, 
            left: 0, 
            behavior: 'smooth' 
           });
    }
    return (
        <div id="banner" className="relative">
                <img className="max-h-[300px] sm:max-h-[400px] md:max-h[600px] lg:max-h-[632px] xl:max-h-[screen] w-full" src="https://images.unsplash.com/photo-1458442310124-dde6edb43d10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt=""/>

                <div className="uppercase text-[24px] md:text-[36px] lg:text-[48px] font-bold text-white absolute top-1/2 w-full text-center">
                    <h1 className="font-Abril ">
                        Find Breathtaking <br /> Landscapes
                    </h1>
                    <div onClick={handleClick} className="w-full mt-5 cursor-pointer hidden sm:flex">
                    <ArrowDownIcon className="w-8 md:w-12 text-white mx-auto animate-bounce" ></ArrowDownIcon>
                    </div>
                </div>

               
        </div>
    );
};

export default Banner;