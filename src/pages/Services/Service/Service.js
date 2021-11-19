import React from 'react';
import { Link } from 'react-router-dom';
// import { ServiceContext } from '../../../provider/ServiceProvider/ServiceProvider';

const Service = (props) => {
    const { _id, title, description, image_url, price } = props.service;
    // const {services} = ServiceContext;
    // console.log(`context ${services}`);
    return (
        <div className="relative cursor-pointer rounded-xl">
            <Link to={`/booking/${_id}`}>
                <div className="overflow-hidden rounded-xl">
                    <img className="min-w-[300px] md:min-w-[500px] rounded-xl hover:scale-105 transform transition-all duration-500 ease-out overflow-hidden" src={image_url} alt="" />
                </div>

                <div className="absolute bottom-0  font-bold w-full text-2xl font-abril hover:bg-black hover:bg-opacity-50  transform transition-all duration-300 ease-in hover:rounded-b-xl text-white text-center p-2 bg-transparent">
                    <h1 className="">
                        {title}
                    </h1>
                </div>
            </Link>

        </div>
    );
};

export default Service;