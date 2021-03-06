import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImWarning } from 'react-icons/im';
import { useCallback, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './modal.css';

const UploadImage = ({ handleClose }) => {
    let idUsuario = sessionStorage.getItem('idusuario');
    let token = sessionStorage.getItem('token');

    const [file, setFile] = useState();
    const [description, setDescription] = useState();
    const [error, setError] = useState();

    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
    const [completedCrop, setCompletedCrop] = useState(null);

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setFile(reader.result));
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    function onSelectDescription(event) {
        const description = event.target.value;
        setDescription(description);
    }

    async function uploadFile(event) {
        event.preventDefault();
        if (!crop) {
        } else {
            try {
                const canvas = document.getElementById('canvas');
                const imagen = canvas.toDataURL();

                const savedPhoto = await fetch(imagen)
                    .then((res) => res.blob())
                    .then((blob) => {
                        const newimg = new File([blob], 'File name', {
                            type: 'image/jpeg',
                        });
                        return newimg;
                    });

                let data = new FormData();
                data.append('description', description);

                data.append('photo', savedPhoto);

                const response = await axios.post(
                    `http://localhost:4000/usuarios/${idUsuario}/photos`,
                    data,
                    {
                        headers: {
                            authorization: token,
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );
                const idImagen = response.data.data.id;
                console.log(idImagen);
            } catch (error) {
                setError('Error subiendo el fichero');
            }
        }
    }

    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);

    useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
            return;
        }

        const image = imgRef.current;
        const canvas = previewCanvasRef.current;
        const crop = completedCrop;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;

        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
    }, [completedCrop]);

    return (
        <form onSubmit={uploadFile} className="uploadimage_form">
            <p className="uploadimage_form_title">
                Seleccione el archivo que desea subir:
            </p>
            <input
                type="file"
                accept="image/*"
                onChange={onSelectFile}
                className="uploadimage_button_selectfile"
                id="file"
                name="file"
            />

            <label for="description" className="uploadimage_description">
                Descripci??n:
                <input
                    type="text"
                    className="uploadimage_description_input"
                    onChange={onSelectDescription}
                />
            </label>
            {error && (
                <div className="uploadimage_error_label">
                    <ImWarning />
                    {error}
                </div>
            )}
            <div className="divcentralcrop">
                <ReactCrop
                    src={file}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                    className="ReactCrop"
                />
            </div>
            <div>
                <canvas
                    className="canvas"
                    ref={previewCanvasRef}
                    style={{
                        width: Math.round(completedCrop?.width ?? 0),
                        height: Math.round(completedCrop?.height ?? 0),
                    }}
                    id="canvas"
                />
            </div>

            <input
                className="uploadimage_button_send"
                type="submit"
                value="Subir"
                onClick={handleClose}
            />
        </form>
    );
};
export default UploadImage;
