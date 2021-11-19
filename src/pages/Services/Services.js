import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import Service from './Service/Service';
import { useContext } from 'react';
import { ServiceContext } from '../../provider/ServiceProvider/ServiceProvider';

const Services = () => {
 const {services, setServices} = useContext(ServiceContext);
    return (
        <div className="py-10">
            <SectionHeader
            headerText="WE OFFER"
            addClass="text-gray-600"
            ></SectionHeader>
            <div className="flex overflow-x-auto flex-nowrap sm:grid sm:grid-cols-2 md:grid-cols-3 px-10 md:px-20 gap-5 overflow-scroll scrollbar-hide">
                {
                    services.map(service => <Service
                        key={service._id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;