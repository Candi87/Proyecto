import './wall.css';
import ListOfImages from './components/ListofImages';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../components/menologeado/menu.js';
import ListOfComments from './components/ListOfComments';
import Like from '../componenetesmenunologueado/Like';
import { useEffect } from 'react';
import getComment from './services/getComment';
import { IoIosSend } from 'react-icons/io';

function Wall() {
    const { id } = useParams();
    const keyword = id;
    const [search, setSearch] = useState([]);

    const [comentario, setComments] = useState('');
    let [addComment, setAddComment] = useState({ comentario });
    let [step, setStep] = useState(1);

    let token = sessionStorage.getItem('token');
    let idUsuario = sessionStorage.getItem('idusuario');

    function onSubmitComments(event) {
        event.preventDefault();

        console.log('STEEEEEEEEEEEEEEEEEEEEEEEP:    ', step);
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
            if (response.ok) {
                setStep(step + 1);
            }
        }
        setComments('');
        performComment();
    }

    useEffect(
        function () {
            //Llamamos al fetch y seteamos los resultados en pase al keyword
            getComment({ keyword }).then((results) => {
                setSearch(results);
            });
        },

        [keyword, step]
    );
    return (
        <div>
            <Menu />
            <div className="showsearch-container">
                <ListOfImages keyword={keyword} />
            </div>
            <div className="comments-container">
                <Like />

                <form onSubmit={onSubmitComments}>
                    <button
                        className="comment-button"
                        type="submit"
                        onClick={() => setAddComment(!addComment)}
                        disabled={comentario ? '' : 'comments'}
                    >
                        <IoIosSend />
                    </button>

                    <textarea
                        className="textarea-comments"
                        type="text"
                        placeholder="Aquí podrás comentar las fotos que más te gusten"
                        value={comentario}
                        onChange={(event) => setComments(event.target.value)}
                    ></textarea>
                </form>

                <ListOfComments search={search} />
            </div>
        </div>
    );
}
export default Wall;
