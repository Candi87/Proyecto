import Imagen from '../../assets/camino1.jpg';

import './fotosUsuarios.css';
import { useState } from 'react';
import { Button } from './botonLike';
import Comentario from '../comentario/Comentario';

function FotosMuro() {
    const [like, setLike] = useState(false);
    const [countLike, setCountLike] = useState(0);

    function darLike() {
        if (like === false) {
            setLike(true);
            setCountLike(countLike + 1);
        } else if (like === true) {
            setLike(false);
            setCountLike(countLike - 1);
        }
    }

    return (
        <div>
            <div className="grid-last-photos">
                <ol>
                    <li className="cardimg">
                        <img src={Imagen}></img>
                        <div className="like-container">
                            <Button onClick={darLike}></Button>
                            <p className="likes-number">{countLike} </p>
                        </div>
                        <Comentario />
                    </li>
                    <li className="cardimg">
                        <img src={Imagen}></img>
                    </li>
                    <li className="cardimg">
                        <img src={Imagen}></img>
                    </li>
                </ol>
            </div>
        </div>
    );
}
export default FotosMuro;
