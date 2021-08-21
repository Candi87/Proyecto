import './comments.css';

function Comments({ id, idImagen, fechaCreacion, comentario, idUsuario }) {
    return (
        <div key={id}>
            {/* <p>ID Usuario: {idUsuario}</p> */}
            <p className="comments"> {comentario}</p>
            {/* <p>Fecha: {fechaCreacion}</p> */}
        </div>
    );
}

export default Comments;
