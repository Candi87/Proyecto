function ComentarioItem({ comentario, borrarComentario }) {
    return (
        <li>
            {comentario.label}
            <button onClick={() => borrarComentario(comentario.id)}>-</button>
        </li>
    );
}

export default ComentarioItem;
