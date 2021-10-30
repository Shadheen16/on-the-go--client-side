import React from 'react';
import HomeBanner from "../../img/home-banner.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div id="banner" className="relative">
                <img className="max-h-[300px] sm:max-h-[400px] md:max-h[600px] lg:max-h-[632px] xl:max-h-[screen] w-full" src="https://images.unsplash.com/photo-1599403302125-430c37091864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt=""/>
        </div>
    );
};

export default Banner;