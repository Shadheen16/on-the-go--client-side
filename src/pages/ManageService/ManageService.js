import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddService from './AddService/AddService';
import DisplayServices from './AddService/DispalyServices/DisplayServices';

const ManageService = () => {
   const [services, setServices] = useState([]);
   console.log(services)
   useEffect(() => {
        axios.get('https://stark-bayou-55220.herokuapp.com/services')
        .then(res => setServices(res.data))
   
   }, []);
    return (
        <div className="px-10 mx-auto md:px-20">
            <AddService></AddService> 

            <h1>
                All Services
            </h1>

            {
                services.map(service => <DisplayServices
                                         key={service._id}
                                         service={service}   
                                        ></DisplayServices>)

            }
        </div>
    );
};

export default ManageService;