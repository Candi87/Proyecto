import ListOfComments from './ListOfComments';
import './listOfImages.css';

function Image({ id, idUsuario, descripcion, url, likes }) {
    return (
        <div>
            <div className="imagesWall">
                <p className="description"> {descripcion}</p>
                <img src={url} alt="Fotos Subidas Por Peregrinos" />
            </div>
            {/* <div>
                <p>ID Imagen: {id}</p>
                <p>ID Usuario: {idUsuario}</p>

                <p>Likes: {likes}</p>
            </div> */}
        </div>
    );
}

export default Image;
