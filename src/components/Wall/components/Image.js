import './listOfImages.css';

function Image({ id, idUsuario, descripcion, url, likes }) {
    return (
        <div>
            <div className="imagesWall">
                <img src={url} alt="Imágen no disponible" />
            </div>
            <div>
                <p>ID Imagen: {id}</p>
                <p>ID Usuario: {idUsuario}</p>
                <p>Descripción: {descripcion}</p>
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
}

export default Image;
