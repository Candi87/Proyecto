import { useState, useEffect } from 'react';
import React from 'react';

function GetCommentsList() {
    let [comments, setComments] = useState([]);

    const splitUrl = window.location.href.split('#');
    let idPhoto;
    if (splitUrl[1] !== 'close') {
        idPhoto = splitUrl[1];
    }

    async function showComments() {
        const response = await fetch(
            `http://localhost:4000/usuarios/photos/comments?idImagen=${idPhoto}`,
            {
                method: 'GET',
            }
        );
        const data = await response.json();

        comments = data.data;
    }

    useEffect(() => {
        return showComments();
    }, []);

    return (
        <div>
            {comments.map((comment) => (
                <div className="comment-container">
                    <p key={comments.id} comments={comments}>
                        {comment.comentario}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default GetCommentsList;
