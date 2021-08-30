import React, { useState } from 'react';
import '../profile.css';
import imagennoperfil from '../../../assets/imagennoperfil.png';

function GetAvatarPhoto() {
    let token = sessionStorage.getItem('token');

    let idUsuario = sessionStorage.getItem('idusuario');
    let [showAvatar, setShowAvatar] = useState([]);

    async function takePhoto() {
        const response = await fetch(
            `http://localhost:4000/usuarios/${idUsuario}`,
            {
                method: 'GET',
                headers: {
                    authorization: token,
                },
            }
        );
        const data = await response.json();
        setShowAvatar(data.informacion.fotoperfil);
    }
    takePhoto();
    if (showAvatar === 'http://localhost:4000/uploads/null') {
        return (
            <div>
                <img
                    src={imagennoperfil}
                    className="photo-profile"
                    alt="profile-photo"
                ></img>
            </div>
        );
    } else {
        return (
            <div>
                <img
                    src={showAvatar}
                    className="photo-profile"
                    alt="profile-photo"
                ></img>
            </div>
        );
    }
}
export default GetAvatarPhoto;
