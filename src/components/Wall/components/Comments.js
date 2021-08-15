export default function Image({
    id,
    idImagen,
    fechaCreacion,
    comentario,
    idUsuario,
}) {
    return (
        <div key={id}>
            <p>ID Usuario: {idUsuario}</p>
            <p>Comentario: {comentario}</p>
            <p>Fecha: {fechaCreacion}</p>
        </div>
    );
}
