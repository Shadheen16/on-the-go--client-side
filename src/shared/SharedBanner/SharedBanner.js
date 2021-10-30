import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import "./SharedBanner.css"

const SharedBanner = ({bannerText}) => {
    return (
        <div>
            <div ClassName="">
                <img className="w-full max-h-screen banner-image" src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="p-5 -mt-10 md:-mt-20 lg:mb-48">
                <SectionHeader
                    addClass="text-gray-300"
                    headerText={bannerText}
                ></SectionHeader>
            </div>
        </div>
    );
};

export default SharedBanner;