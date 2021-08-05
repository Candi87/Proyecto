import { useEffect, useState } from 'react';

function ImgRow({ image }) {
    const [imageInfo, setImageInfo] = useState({});

    async function getImage(url) {
        const response = await fetch(url);

        const data = await response.json();

        setImageInfo(data);
    }

    useEffect(() => {
        if (image.url) {
            getImage(image.url);
        }
    }, [image]);

    const imgUrl = image.url;

    return (
        <div>
            <ol>
                <li>
                    <img
                        className="imagesWall"
                        src={imgUrl}
                        alt={image.descripcion}
                    />
                </li>
            </ol>
        </div>
    );
}

export default ImgRow;
