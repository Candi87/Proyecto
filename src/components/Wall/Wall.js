import './wall.css';
import ListOfImages from './components/ListofImages';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../components/menologeado/menu.js';
import ListOfComments from './components/ListOfComments';
import PostComment from './services/PostComment';
import { useEffect } from 'react';
import getComment from './services/getComment';

function Wall() {
    const { id } = useParams();
    const keyword = id;
    const [search, setSearch] = useState([]);

    const [comentario, setComments] = useState('');
    let [addComment, setAddComment] = useState({ comentario });
    let [step, setStep] = useState(0);

    let token = sessionStorage.getItem('token');

    let { idUsuario } = useParams();

    function onSubmitComments(event) {
        event.preventDefault();
        setStep(step + 1);
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
            <div className="showsearch-container">
                <ListOfComments search={search} />

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
                        onClick={() => setAddComment(!addComment)}
                        disabled={comentario ? '' : 'comments'}
                    ></button>
                </form>
            </div>
        </div>
    );
}
export default Wall;
