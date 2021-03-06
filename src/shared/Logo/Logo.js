import React from 'react';

const Logo = () => {
    return (
        <div id="logo">
            <div className="flex items-center text-red-500 font-light">
              <div className="relative">
                <span className="text-[36px]">O</span>
                <span className="text-sm lowercase absolute left-[38%] top-[30%]"><small>n</small></span>
              </div>
              <div className="mx-1">
                <span className="text-lg lowercase">the</span>
                <span className="text-lg h-full items-center lowercase">go</span>
              </div> 
             
            </div>
        </div>
    );
};

export default Logo;