import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';

function PostComment() {
    const [comentario, setComments] = useState('');
    let [addComment, setAddComment] = useState({ comentario });

    let token = sessionStorage.getItem('token');

    let { idUsuario, id } = useParams();

    function onSubmitComments(event) {
        event.preventDefault();

        async function performComment() {
            const response = await fetch(
                `http://localhost:4000/usuarios/${idUsuario}/photos/${id}/comment`,
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
            addComment = data.data;
        }
        setComments('');
        performComment();
    }
    return (
        <div>
            <form onSubmit={onSubmitComments}>
                <input
                    className='input-comments'
                    type='text'
                    placeholder='Aquí podrás comentar las fotos que más te gusten'
                    value={comentario}
                    onChange={(event) => setComments(event.target.value)}
                ></input>
                <button
                    type='submit'
                    onClick={() => setAddComment(!addComment)}
                    disabled={comentario ? '' : 'comments'}
                >
                    <IoIosSend />
                </button>
            </form>
        </div>
    );
}

export default PostComment;
// import { useParams } from 'react-router-dom';
// import { IoIosSend } from 'react-icons/io';

// function PostComment() {
//     const [comentario, setComments] = useState('');
//     let [addComment, setAddComment] = useState({ comentario });

//     let token = sessionStorage.getItem('token');

//     let { idUsuario, id } = useParams();

//     function onSubmitComments(event) {
//         event.preventDefault();

//         async function performComment() {
//             const response = await fetch(
//                 `http://localhost:4000/usuarios/${idUsuario}/photos/${id}/comment`,
//                 {
//                     method: 'POST',

//                     headers: {
//                         authorization: token,

//                         'Content-Type': 'application/json',
//                     },

//                     body: JSON.stringify({
//                         comentario,
//                     }),
//                 }
//             );
//             const data = await response.json();
//             addComment = data.data;
//         }
//         setComments('');
//         performComment();
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmitComments}>
//                 <input
//                     className='input-comments'
//                     type='text'
//                     placeholder='Aquí podrás comentar las fotos que más te gusten'
//                     value={comentario}
//                     onChange={(event) => setComments(event.target.value)}
//                 ></input>
//                 <button
//                     type='submit'
//                     onClick={() => setAddComment(!addComment)}
//                     disabled={comentario ? '' : 'comments'}
//                 >
//                     <IoIosSend />
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default PostComment;
