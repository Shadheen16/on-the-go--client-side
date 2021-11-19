import React from 'react';
import Logo from '../../shared/Logo/Logo';
import OpeningHours from '../../shared/OpeningHours/OpeningHours';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 mt-20 pb-10 bg-gray-100 p-5 text-gray-600 footer">
            <div className="mx-5 footer-box">
                <Logo className="m-3"></Logo>

            </div>
            <div className="text-xs sm:mx-5 footer-box">
                <OpeningHours></OpeningHours>
            </div>
            <div className="mt-2 mx-5 footer-box uppercase text-xs">
                <h5 className="font-bold">OTHERS</h5>
                <div className="">
                    <p className="py-3 border-b mt-5"> Canvas </p>
                    <p className="py-3 border-b"> Catalyst </p>
                    <p className="py-3 border-b">Recent Tours </p>
                    <p className="py-3 border-b">Popular Tours</p>
                </div>
            </div>
            <div className="mt-2 mx-5 footer-box uppercase text-xs">
            <h5 className="font-bold">CONTACT US</h5>
            <small>
                    Box 35300 <br />
                    Bothell, WA 98011-8246 <br />
                    +1-2534-4456-345 <br />
                    admin@kingsteruni.tours
                </small>
            </div>
        </div>
    );
};

export default Footer;