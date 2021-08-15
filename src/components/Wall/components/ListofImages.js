import Image from './Image';
import { useEffect, useState } from 'react';
import getImage from '../services/getImage';

export default function ListOfImages({ keyword = '' }) {
    const [search, setSearch] = useState([]);

    useEffect(
        function () {
            //Llamamos al fetch y seteamos los resultados en pase al keyword
            getImage({ keyword }).then((results) => {
                setSearch(results);
            });
        },
        [keyword]
    );
    return search.map((singleImage) => (
        // No usamos el [...singleImage] para identificar que parámetros se envían
        <Image
            key={singleImage.id}
            id={singleImage.id}
            idUsuario={singleImage.idUsuario}
            descripcion={singleImage.descripcion}
            url={singleImage.url}
            likes={singleImage.likes}
        />
    ));
}
