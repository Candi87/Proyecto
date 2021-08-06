import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ImgRow({ image }) {
    let { idUsuario } = useParams();

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
