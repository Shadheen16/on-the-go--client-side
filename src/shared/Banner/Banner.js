import React from 'react';
import HomeBanner from "../../img/home-banner.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div id="banner" className="relative">
                <img className="max-h-[300px] sm:max-h-[400px] md:max-h[600px] lg:max-h-[632px] xl:max-h-[screen] w-full" src="https://images.unsplash.com/photo-1530476219733-88085e45aa2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1243&q=80" alt=""/>

                <div className="uppercase text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white psoition absolute top-1/3 left-1/3">
                    <h1 className="font-Abril ">
                        Find Breathtaking <br /> Landscapes
                    </h1>
                </div>
        </div>
    );
};

export default Banner;