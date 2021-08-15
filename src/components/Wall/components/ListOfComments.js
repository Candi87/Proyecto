import Comments from './Comments';
function ListOfComments({ search }) {
    return (
        <div>
            {search.map((singleImage) => (
                <Comments
                    key={singleImage.id}
                    idImagen={singleImage.idImagen}
                    fechaCreacion={singleImage.fechaCreacion}
                    comentario={singleImage.comentario}
                    idUsuario={singleImage.idUsuario}
                />
            ))}
        </div>
    );
}

export default ListOfComments;
