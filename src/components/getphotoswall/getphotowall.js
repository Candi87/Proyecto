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
        const photo = data.data.id;
        setImages(data.data);
        console.log(data);
    }
    useEffect(() => {
        showPhotosWall();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <div>
                    <div id={image.id} class="modalmask">
                        <div class="modalbox movedown">
                            <a href="#close" title="Close" class="close">
                                X
                            </a>
                            <h2>{image.descripcion}</h2>
                            <p>{image.fechasubida}</p>
                            <img src={image.url} alt={image.id} />
                        </div>
                    </div>
                    <ImgRow key={image.url} image={image} value={image.id} />
                </div>
            ))}
        </div>
    );
}

export default GetPhotoWall;
