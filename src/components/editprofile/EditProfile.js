import { useModalWithData } from '../../customHooks/useModal';
import EditModal from './EditModal';
import { GoGear } from 'react-icons/go';

import axios from 'axios';
import React, { useState } from 'react';

function EditProfile() {
    const [setIsModalOpened, isModalOpened, modalData, setModalData] =
        useModalWithData();

    const tokenInfo = sessionStorage.getItem('token');
    const idUsuario = sessionStorage.getItem('idusuario');
    const [userInfo, setUserInfo] = useState();
    console.log('userInfo: ', userInfo);
    // Solicitud GET USERINFO
    if (!userInfo) {
        async function getUserInfo() {
            try {
                const response = await axios({
                    method: 'GET',
                    url: `http://localhost:4000/usuarios/${idUsuario}`,
                    headers: {
                        authorization: tokenInfo,
                        'Content-Type': 'application/json',
                    },
                });
                setUserInfo(response.data.informacion);
            } catch (error) {
                console.log('error: ', error);
            }
        }
        getUserInfo();
    }
    return (
        <div>
            <EditModal
                isActive={isModalOpened}
                handleClose={() => setIsModalOpened(false)}
                userInfo={userInfo}
            ></EditModal>
            <GoGear
                className="MdAddAPhoto"
                onClick={() => {
                    setModalData('editar perfil');
                    setIsModalOpened(true);
                }}
            />
        </div>
    );
}

export default EditProfile;
