import React, { useContext, useEffect, useState } from 'react';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import AddService from './AddService/AddService';
import DisplayServices from './AddService/DispalyServices/DisplayServices';
import { ServiceContext } from '../../provider/ServiceProvider/ServiceProvider';

const ManageService = () => {
   const {services, setServices} = useContext(ServiceContext)
    return (
        <div className="">
            <SharedBanner
            bannerText="Manage Your Services"
            />
            <div className="px-10 mx-auto md:px-20">
            <div className="">
            <AddService></AddService> 
            </div>
                

            <h1 className="my-10 text-2xl md:text-3xl">
                All Services
            </h1>

            {
                services.map(service => <DisplayServices
                                         key={service._id}
                                         service={service}   
                                        ></DisplayServices>)

            }
        </div>
            </div>
     
    );
};

export default ManageService;