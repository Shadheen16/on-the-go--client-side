import React, { createContext } from 'react';
import useServices from '../../Hooks/useServices';


export const ServiceContext = createContext();


const ServiceProvider = ({children}) => {
   const serviceContext = useServices();
    return (
       <ServiceContext.Provider value={serviceContext}>
           {children}
       </ServiceContext.Provider>
    );
};

export default ServiceProvider;