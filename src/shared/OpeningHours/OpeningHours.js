import React from 'react';

const OppeningHours = () => {
    return (
        <div>
            <h5 className="font-bold my-2 py-5 border-b-2 border-gray-300 uppercase mb-5">OPENING HOURS</h5>
            <div className="flex justify-between py-3 border-b hover:text-green-400 cursor-pointer">
                <p>SUNDAY</p>
                <p>7.00-22.00</p>
            </div>
            <div className="flex justify-between py-3 border-b hover:text-green-400 cursor-pointer">
                <p>MONDAY</p>
                <p>7.00-22.00</p>
            </div>
            <div className="flex justify-between py-3 border-b hover:text-green-400 cursor-pointer">
                <p>TUSEDAY</p>
                <p>7.00-22.00</p>
            </div>
            <div className="flex justify-between py-3 border-b hover:text-green-400 cursor-pointer">
                <p>WEDNESDAY</p>
                <p>7.00-22.00</p>
            </div>
            <div className="flex justify-between py-3 border-b hover:text-green-400 cursor-pointer">
                <p>THURSDAY</p>
                <p>7.00-22.00</p>
            </div>
            <div className="flex justify-between py-3 border-b text-green-400 hover:text-gray-400 cursor-pointer">
                <p>FRYDAY</p>
                <p>15.00-22.00</p>
            </div>
            <div className="flex justify-between py-3 border-b hover:text-green-400 cursor-pointer">
                <p>SAT</p>
                <p>7.00-22.00</p>
            </div>
        </div>
    );
};

export default OppeningHours;