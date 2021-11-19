import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';

const NotFound = () => {
    return (
        <div className="w-screen min-h-screen pt-20 sm:pt-44 lg:pt-56 bg-black" >
            <img className="w-full" src="../../images/anastase-maragos-9dzWZQWZMdE-unsplash (1).jpg" alt="" />
            <h1 className="text-6xl text-white">404 ERROR <br /> PAGE NOT FOUND</h1>
            <div className="mt-20 sm:mt-10">
            <Link  to="/">
                <Button
                    btnText="Go back"
                ></Button>
            </Link> 
            </div>
           
        </div>
    );
};

export default NotFound;