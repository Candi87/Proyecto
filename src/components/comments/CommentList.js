import { useState, useEffect } from 'react';
import React from 'react';

function GetCommentsList() {
    const [comments, setComments] = useState([]);

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

        setComments(data.data);

        console.log(data.data);
    }

    useEffect(() => {
        return showComments();
    }, []);

    return (
        <div>
            {comments.map((comment) => (
                <div className="comment-container">
                    <p key={comments.id}>{comment.comentario}</p>
                </div>
            ))}
        </div>
    );
}

export default GetCommentsList;

// http://localhost:4000/usuarios/photos/comments?idImagen=1

// handleClick = () => {
//   const urlSplit = URL.split('#')
//   if(urlSplit[1] !== 'close') {
//      showComments()
//      setComments(URL)}
