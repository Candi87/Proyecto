// lo que necesito para el comentario del backend
// const { comentario } = req.body;
// const { idUsuario, idImagen } = req.params;

import { useState } from 'react';

// if (
//     !req.authEntity.idUsuario ||
//     req.authEntity.idUsuario !== Number(idUsuario)//token!!

function Comment(event) {
    const [comments, setComments] = useState('');
    let token = sessionStorage.getItem('token');
    let { idUsuario } = useParams();
    let { idImagen } = useParams();

    function onSubmitComments(event) {
        event.preventDefault();
        const comments = event.target.value;
        setComments(comments);

        async function performComment() {
            const response = await fetch(
                `http://localhost:4000/usuarios/${idUsuario}/photos/${idImagen}/comment`,
                {
                    method: 'POST',

                    headers: {
                        authorization: token,

                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        comentario,
                    }),
                }
            );
            const data = await response.json();
        }
    }
    return;
}
export default Comment;
