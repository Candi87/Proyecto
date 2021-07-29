import ComentarioItem from './comentarioitem';

function ListaComentarios({ comentarios, borrarComentario }) {
    return (
        <ul>
            {comentarios.map((comentario) => (
                <ComentarioItem
                    key={comentario.id}
                    comentario={comentario}
                    borrarComentario={borrarComentario}
                />
            ))}
        </ul>
    );
}
export default ListaComentarios;
