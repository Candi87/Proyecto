import Imagen from '../../assets/camino1.jpg';

import './fotosUsuarios.css';
import { useState } from 'react';
import { Button } from './botonLike';

import GetPhotoWall from '../getphotoswall/getphotowall';

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
        <div className="grid-last-photos-container">
            <GetPhotoWall />
            {/* <div className="like-container">
                        <Button onClick={darLike}></Button>
                        <p className="likes-number">{countLike} </p>
                    </div> */}
        </div>
    );
}
export default FotosMuro;
