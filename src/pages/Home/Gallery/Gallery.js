import React from 'react';
import GalleryPhoto from './GalleryPhoto/GalleryPhoto';

const Gallery = () => {

const photos = [
    {
        id:"1",
        url:"https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"2",
        url:"https://images.unsplash.com/photo-1475400113749-cfe5890dc191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    },
    {
        id:"3",
        url:"https://images.unsplash.com/photo-1518174020386-08c9fdb5b8ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"4",
        url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"5",
        url:"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:"6",
        url:"https://images.unsplash.com/photo-1563299796-17596ed6b017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:"7",
        url:"https://images.unsplash.com/photo-1562206513-6a81cfc73936?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:"8",
        url:"https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
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