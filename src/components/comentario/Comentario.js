import './comentario.css';
import AñadirComentario from './añadircomentario';
import ListaComentarios from './listacomentario';
import ComentarioItem from './comentarioitem';
import { useState } from 'react';

const COMENTARIOS_PREDEFINIDOS = [
    {
        id: 1,
        label: 'Fotaza',
    },
    {
        id: 2,
        label: 'Fotaza',
    },
    {
        id: 3,
        label: 'Fotaza',
    },
    {
        id: 4,
        label: 'Fotaza',
    },
    {
        id: 5,
        label: 'Fotaza',
    },
];

function Comentario() {
    const [comentarios, setComentarios] = useState(COMENTARIOS_PREDEFINIDOS);

    function borrarComentario(comentarioId) {
        //llamada a api aquí//
        const comentarioFiltrados = comentarios.filter(
            (comentario) => comentario.id !== comentarioId
        );

        setComentarios(comentarioFiltrados);
    }
    function addComentario(comenatrioLabel) {
        const nuevoComentario = {
            id: 6,
            label: comenatrioLabel,
        };
        const nuevaListaComentarios = [...comentarios, nuevoComentario];

        setComentarios(nuevaListaComentarios);
    }

    return (
        <div>
            <AñadirComentario addComentario={addComentario} />

            <ListaComentarios
                borrarComentario={borrarComentario}
                comentarios={comentarios}
            />
        </div>
    );
}

export default Comentario;
