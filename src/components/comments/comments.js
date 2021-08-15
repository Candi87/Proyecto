import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';
import GetCommentsList from './CommentList';

function Comment() {
    const [comentario, setComments] = useState('');
    let [addComment, setAddComment] = useState({ comentario });

    let token = sessionStorage.getItem('token');

    let { idUsuario } = useParams();

    const splitUrl = window.location.href.split('#');
    let idPhoto;
    if (splitUrl[1] !== 'close') {
        idPhoto = splitUrl[1];
    }

    function onSubmitComments(event) {
        event.preventDefault();

        async function performComment() {
            const response = await fetch(
                `http://localhost:4000/usuarios/${idUsuario}/photos/${idPhoto}/comment`,
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
            addComment = data.comment;
        }
        setComments('');
        performComment();
    }

    return (
        <div>
            <form onSubmit={onSubmitComments}>
                <input
                    className="input-comments"
                    type="text"
                    placeholder="Aquí podrás comentar las fotos que más te gusten"
                    value={comentario}
                    onChange={(event) => setComments(event.target.value)}
                ></input>
                <button
                    type="submit"
                    onClick={() => setAddComment(addComment)}
                    disabled={comentario ? '' : 'comments'}
                >
                    <IoIosSend />
                </button>
                <GetCommentsList comentario={comentario} />
            </form>
        </div>
    );
}

export default Comment;
