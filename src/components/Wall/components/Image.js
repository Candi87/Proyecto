export default function Image({ id, idUsuario, descripcion, url, likes }) {
    return (
        <div>
            <p>ID Imagen: {id}</p>
            <p>ID Usuario: {idUsuario}</p>
            <img src={url} alt='Imágen no disponible' />
            <p>Descripción: {descripcion}</p>
            <p>Likes: {likes}</p>
        </div>
    );
}
