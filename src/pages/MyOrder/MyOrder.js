import { BadgeCheckIcon, XCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../../Hooks/useAuth';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth();
    console.log(myOrders);

    // get orders by eemail

    useEffect(() => {
     axios.post('https://whispering-ravine-18625.herokuapp.com/my-orders', user)
    .then(res=> setMyOrders(res.data));
    },[]);

    return (
        <div>
            <SharedBanner
            bannerText="My Orders"
            ></SharedBanner>
                  {/* orders summary table */}
                  <div>
                <div className="container sm:px-20 text-gray-600 mt-10 shadow-xl">
                    <table className="text-center w-full ">
                        <thead className="bg-gray-600 rounded-t-xl last-child:rounded-b-xl  flex text-white w-full">
                            <tr className="flex w-full border-b-2 mb-4">
                                <th className="p-4"># Sl</th>
                                <th className="p-4 w-1/4">Ordered Service</th>
                                <th className="p-4 w-1/4">Orderer Name</th>
                                <th className="p-4 w-1/4">Orderer E-mail</th>
                                <th className="p-4 w-1/4">Orderer Phone</th>
                                <th className="p-4 w-1/4">Asking date</th>
                                <th className="p-4 w-1/4">Status</th>
                                <th className="p-4 w-1/4">Action</th>
                            </tr>
                        </thead>
                        {/* <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! --> */}
                        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll scrollbar-hide w-full h-[50vh]">
                            {

                                myOrders.map(myOrder => <tr
                                    key={MyOrder._id}
                                    className="flex w-full border-b-2 text-center">
                                    <td className="p-4">{myOrders.indexOf(myOrder) + 1}</td>
                                    <td className="p-4 w-1/4">{myOrder.service_name}</td>
                                    <td className="p-4 w-1/4">{myOrder.name}</td>
                                    <td className="p-4 w-1/4">{myOrder.email}</td>
                                    <td className="p-4 w-1/4">{myOrder.phone}</td>
                                    <td className="p-4 w-1/4">{myOrder.date}</td>
                                    <td className="p-4 w-1/4">{myOrder.status}</td>
                                    <td className="p-4 w-1/4 space-y-2">
                                        <BadgeCheckIcon id="approved" className="h-6 w-6 mx-auto text-gray-300 cursor-pointer hover:scale-110 transform transition-all duration-300 hover:text-gray-500 ease-out"></BadgeCheckIcon>
                                        <XCircleIcon id="cancel" className="h-6 w-6 mx-auto text-gray-300 hover:text-gray-500 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-out"></XCircleIcon>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;