import React from 'react';
import GalleryPhoto from './GalleryPhoto/GalleryPhoto';

const Gallery = () => {

const photos = [
    {
        id:"1",
        url:"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
    },
    {
        id:"2",
        url:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"3",
        url:"https://images.unsplash.com/photo-1546817372-628669db4655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    },
    {
        id:"4",
        url:"https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
    },
    {
        id:"5",
        url:"https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"6",
        url:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"7",
        url:"https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"8",
        url:"https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {
                photos.map((photo)=> <GalleryPhoto
                key ={photo.id}
                photoUrl = {photo.url}
                ></GalleryPhoto>)
            }
            
        </div>
    );
};

export default Gallery;