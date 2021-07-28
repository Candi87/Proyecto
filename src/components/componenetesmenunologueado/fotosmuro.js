import Imagen from '../../assets/camino1.jpg';

import './fotosUsuarios.css';
import { useState } from 'react';
import { Button } from './botonLike';

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

                        <input
                            type="text"
                            placeholder="Comenta las fotos que más te gusten aquí"
                            className="comentario"
                        />
                        <div className="contenedor-like">
                            <Button onClick={darLike}></Button>
                            <p className="numero-de-likes">{countLike} Likes</p>
                        </div>
                    </li>
                    <li className="cardimg">
                        <img src={Imagen}></img>
                        <input type="text" className="comentario" />
                    </li>
                </ol>
            </div>
        </div>
    );
}
export default FotosMuro;
