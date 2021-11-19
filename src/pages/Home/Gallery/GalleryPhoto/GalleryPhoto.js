import React from 'react';

const GalleryPhoto = ({photoUrl}) => {
    // console.log(photoUrl)
    return (
        <>
        
        <div className=" overflow-hidden 
        ">
           <div className="max-w-sm max-h-[200px] rounded">
                <img className=" max-w-sm hover:scale-110 transition duration-500 ease-in-out transform hover  overflow-hidden" src={photoUrl} alt="" />
           </div>
        </div>
        </>
    );
};

export default GalleryPhoto;