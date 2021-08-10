import { useEffect, useState } from 'react';

function ImgRow({ image }) {
    const [imageInfo, setImageInfo] = useState({});

    async function getImage(url) {
        const response = await fetch(url);

        const data = await response.json();

        setImageInfo(data);
        console.log(data);
    }

    useEffect(() => {
        if (image.url) {
            getImage(image.url);
        }
    }, [image]);
    // '/usuarios/:idUsuario/photos/:idImagen/comment'
    const imgUrl = image.url;
    const idPhoto = '#' + image.id;

    return (
        <div>
            <a href={idPhoto}>
                <img
                    className="imagesWall"
                    src={imgUrl}
                    alt={image.descripcion}
                />
            </a>
        </div>
    );
}

export default ImgRow;
