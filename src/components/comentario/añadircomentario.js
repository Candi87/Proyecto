import { useState } from 'react';

function AñadirComentario({ addComentario }) {
    const [texto, setTexto] = useState('');

    return (
        <div>
            <input
                onChange={(event) => {
                    const value = event.target.value;
                    setTexto(value);
                }}
                placeholder="comentario"
            />
            <button onClick={() => addComentario(texto)}>+</button>
        </div>
    );
}

export default AñadirComentario;
