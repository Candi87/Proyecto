import { useState, useEffect } from 'react';
import React from 'react';
import ImgRow from './imgRow';
import './getPhoto.css';

function GetPhotoWall() {
    const [images, setImages] = useState([]);

    async function showPhotosWall() {
        const response = await fetch(
            'http://localhost:4000/usuarios/photos/all',
            {
                method: 'GET',
            }
        );
        const data = await response.json();
        setImages(data.data);
    }
    useEffect(() => {
        showPhotosWall();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <ImgRow key={image.url} image={image} />
            ))}
        </div>
    );
}

export default GetPhotoWall;
