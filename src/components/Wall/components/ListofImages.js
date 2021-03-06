import Image from './Image';
import { useEffect, useState } from 'react';
import getImage from '../services/getImage';

function ListOfImages({ keyword = '' }) {
    const [search, setSearch] = useState([]);

    useEffect(function () {
        //Llamamos al fetch y seteamos los resultados en pase al keyword
        getImage({ keyword }).then((results) => {
            setSearch(results);
        });
    }, []);

    return search.map((singleImage) => (
        // No usamos el [...singleImage] para identificar que parámetros se envían

        <div className="listofimages">
            <Image
                key={singleImage.id}
                id={singleImage.id}
                idUsuario={singleImage.idUsuario}
                descripcion={singleImage.descripcion}
                url={singleImage.url}
                likes={singleImage.likes}
            />
        </div>
    ));
}
export default ListOfImages;
