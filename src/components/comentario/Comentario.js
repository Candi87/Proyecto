import './comentario.css';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Comment() {
    const [comentario, setComentario] = useState('');

    const query = new URLSearchParams(useLocation().search);
    const idUsuario = query.get('idUsuario');
    const idImagen = query.get('idImagen');

    useEffect(() => {
        function OnSubmitComment(event) {
            event.preventDefault();

            async function performAddComent() {
                const response = await fetch(
                    'http://localhost/usuarios/:idUsuario/photos/:idImagen/comment',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            comentario,
                            idUsuario,
                            idImagen,
                        }),
                    }
                );
                await response.json();
            }
            performAddComent();
        }
    }, [comentario, idUsuario, idImagen]);

    return (
        <div>
            <input
                type="text"
                className="coment"
                value={comentario}
                onChange={(event) => setComentario(event.target.value)}
            />
            <button>+</button>
        </div>
    );
}
export default Comment;
