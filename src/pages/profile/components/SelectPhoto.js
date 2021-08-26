import React, { useState } from 'react';

function SelectPhoto() {
    let token = sessionStorage.getItem('token');
    let idUsuario = sessionStorage.getItem('idusuario');
    let [selectImg, setSelectImg] = useState('');
    async function imageProfile() {
        const response = await fetch(
            `http://localhost:4000/usuarios/${idUsuario}`,
            {
                method: 'PUT',
                headers: {
                    authorization: token,
                },
            }
        );

        selectImg = response.json();
        console.log('imagen perfil', selectImg);
    }
    imageProfile();
    console.log('token', token);
    return <div onClick={setSelectImg}></div>;
}

export default SelectPhoto;
