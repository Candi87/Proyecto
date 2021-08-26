import React, { useState } from 'react';
import '../profile.css';

function ShowNickname() {
    let token = sessionStorage.getItem('token');
    let idUsuario = sessionStorage.getItem('idusuario');
    let [user, setUser] = useState('');
    let [date, setDate] = useState('');
    let [email, setEmail] = useState('');

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
        setDate(data.informacion.createdAt);
        setUser(data.informacion.nickname);
        setEmail(data.informacion.email);
    }

    nickName();

    return (
        <div>
            <p className="nickname">{user}</p>
            <p className="date"> {date}</p>
            <p className="email">{email}</p>
        </div>
    );
}

export default ShowNickname;
