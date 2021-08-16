function Comments({ id, idImagen, fechaCreacion, comentario, idUsuario }) {
    return (
        <div key={id}>
            {/* <p>ID Usuario: {idUsuario}</p> */}
            <p> {comentario}</p>
            {/* <p>Fecha: {fechaCreacion}</p> */}
        </div>
    );
}

export default Comments;
