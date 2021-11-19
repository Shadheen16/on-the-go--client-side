import { BadgeCheckIcon, XCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [updatedtStatus, setUpdatedStatus] = useState(0);
    console.log(orders)

    // update status
    const handleUpdateStatus = async (orderId, status, buttonId) => {

        console.log(orderId);
        if (status===0 && buttonId==='approved'){
             setUpdatedStatus(1);
             console.log(updatedtStatus)
        }

        console.log(updatedtStatus, status)
        await axios.put(`http://localhost:5000/orders/${orderId}`, { status:updatedtStatus})
            .then(res => console.log(res.data))

        displayOrderStatus(orderId, updatedtStatus)

    }


    // getOrders();

    useEffect(() => {
        axios.get('https://whispering-ravine-18625.herokuapp.com/orders')
            .then(res => setOrders(res.data))
    }, [updatedtStatus])

    // display order status

    const displayOrderStatus = (elementId, status) => {
        console.log("updating status of: "+elementId)
        if (status === 0) {
            document.getElementById('elementId').innerText='Pending'
        } else if (status === 1) {
            document.getElementById('elementId').innerText="Approved"
        } else if (status === 2) {
            document.getElementById('elementId').innerText="Canceled"
        }
    } 

    return (
        <div className="space-y-10">
            <SharedBanner
                bannerText="Orders Summary"
            >
            </SharedBanner>
            <h1 className="text-2xl md" text-4xl mt-10>
                All Orders
            </h1>
            {/* orders summary table */}
            <div>
                <div className="container sm:px-20">
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

                                orders.map(order => <tr
                                    key={order._id}
                                    className="flex w-full border-b-2 text-center">
                                    <td className="p-4">{orders.indexOf(order) + 1}</td>
                                    <td className="p-4 w-1/4">{order.service_title}</td>
                                    <td className="p-4 w-1/4">{order.name}</td>
                                    <td className="p-4 w-1/4">{order.email}</td>
                                    <td className="p-4 w-1/4">{order.phone}</td>
                                    <td className="p-4 w-1/4">{order.date}</td>
                                    <td className="p-4 w-1/4" id={order._id}>{order.status}</td>
                                    <td className="p-4 w-1/4 space-y-2">
                                        <BadgeCheckIcon id='cancel' onClick={() => handleUpdateStatus(order._id, order.status, "approved")} className="h-6 w-6 mx-auto text-gray-300 cursor-pointer hover:scale-110 transform transition-all duration-300 hover:text-gray-500 ease-out"></BadgeCheckIcon>
                                        <XCircleIcon id="cancel" onClick={() => handleUpdateStatus(order._id, order.status, "cancel")} className="h-6 w-6 mx-auto text-gray-300 hover:text-gray-500 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-out"></XCircleIcon>
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

export default Orders;