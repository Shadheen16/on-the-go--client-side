import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import "./SharedBanner.css"

const SharedBanner = ({bannerText}) => {
    return (
        <div className="relative">
                <img className="max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh]   w-full object-cover banner-image" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=821&q=80" alt="" />

                <SectionHeader
                    addClass="text-gray-600 mt-10"
                    headerText={bannerText}
                ></SectionHeader>
        </div>
    );
};

export default SharedBanner;