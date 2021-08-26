import React, { useState } from 'react';

function GetNickname() {
    let token = sessionStorage.getItem('token');
    let idUsuario = sessionStorage.getItem('idusuario');
    let [user, setUser] = useState('');

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
        console.log(data.informacion);

        setUser(data.informacion.nickname);
    }

    nickName();

    return (
        <div>
            <p>{user}</p>
        </div>
    );
}

export default GetNickname;
