import React from 'react';

const GalleryPhoto = ({photoUrl}) => {
    // console.log(photoUrl)
    return (
        <>
        
        <div className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
           <div className="max-w-sm rounded">
                <img className="w-full" src={photoUrl} alt="" />
           </div>
        </div>
        </>
    );
};

export default GalleryPhoto;