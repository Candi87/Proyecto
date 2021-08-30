import React, { useState } from 'react';
import '../profile.css';
import { useParams } from 'react-router-dom';

function ShowNickname({ className }) {
    let token = sessionStorage.getItem('token');
    let { idUsuario } = useParams();
    let [user, setUser] = useState('');

    let [name, setName] = useState('');

    async function nickName() {
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

        setUser(data.informacion.nickname);
        setName(data.informacion.name);
    }

    nickName();

    return (
        <div>
            <p className={className}>{user}</p>
            <p className={className}>{name}</p>
        </div>
    );
}

export default ShowNickname;
