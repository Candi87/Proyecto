import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImWarning } from 'react-icons/im';
import './modaleditprofile.css';
import imagennoperfil from '../../assets/imagennoperfil.png';
import { AiFillCloseCircle } from 'react-icons/ai';

function EditCall({ handleClose, userInfo }) {
    const { idUsuario } = useParams();
    const tokenInfo = sessionStorage.getItem('token');

    if (document.getElementById('btnModal')) {
        let modal = document.getElementById('tvesModal');
        let btn = document.getElementById('btnModal');
        let span = document.getElementsByClassName('close')[0];
        let body = document.getElementsByTagName('body')[0];

        btn.onclick = function () {
            modal.style.display = 'block';

            body.style.position = 'static';
            body.style.height = '100%';
            body.style.overflow = 'hidden';
        };

        span.onclick = function () {
            modal.style.display = 'none';

            body.style.position = 'inherit';
            body.style.height = 'auto';
            body.style.overflow = 'visible';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';

                body.style.position = 'inherit';
                body.style.height = 'auto';
                body.style.overflow = 'visible';
            }
        };
    }

    const [error, setError] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    console.log('userInfo del Editcall: ', userInfo);

    function onSelectEmail(event) {
        const email = event.target.value;
        setEmail(email);
    }
    function onSelectusername(event) {
        const username = event.target.value;
        setUsername(username);
    }
    function onSelectOldPassword(event) {
        const password = event.target.value;
        setOldPassword(password);
    }
    function onSelectNewPassword(event) {
        const newpassword = event.target.value;
        setNewPassword(newpassword);
    }
    async function editUsername(event) {
        event.preventDefault();
        try {
            const response = await axios({
                method: 'PUT',
                url: `http://localhost:4000/usuarios/${idUsuario}`,
                headers: {
                    authorization: tokenInfo,
                    'Content-Type': 'application/json',
                },
                data: {
                    username: username, // This is the body part
                },
            });
        } catch (error) {
            setError(error);
        }
    }
    async function editMail(event) {
        event.preventDefault();
        try {
            const response = await axios({
                method: 'PUT',
                url: `http://localhost:4000/usuarios/${idUsuario}`,
                headers: {
                    authorization: tokenInfo,
                    'Content-Type': 'application/json',
                },
                data: {
                    email: email,
                },
            });
        } catch (error) {
            setError(error);
        }
    }
    async function editPassword(event) {
        event.preventDefault();
        try {
            const response = await axios({
                method: 'PUT',
                url: `http://localhost:4000/usuarios/${idUsuario}/password`,
                headers: {
                    authorization: tokenInfo,
                    'Content-Type': 'application/json',
                },
                data: {
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                },
            });
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className="editprofile_form">
            <div className="uploadimage_form_title">
                <p className="edit-profile">Editar perfil</p>
            </div>
            <div>
                <div className="main_profile_avatar">
                    {userInfo && (
                        <div>
                            <img
                                className="photo-perfil-modal"
                                src={imagennoperfil}
                                alt="Foto perfil"
                            ></img>

                            <p className="username-modal-edit">
                                {userInfo.name}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="container-edit-profile">
                <div className="editprofile_form_label">
                    <a className="links" href="#modal1">
                        Cambiar Nombre
                    </a>
                </div>

                <div className="editprofile_form_label">
                    <a className="links" href="#modal2">
                        Cambiar Email
                    </a>
                </div>
                <div className="editprofile_form_label">
                    <a className="links" href="#modal3">
                        Cambiar Contraseña
                    </a>
                </div>
            </div>

            <div id="modal1" class="modalmask">
                <div class="modalbox movedown">
                    <a href="#close" title="Close" class="close">
                        X
                    </a>
                    <h2 className="tittle-edit">Nombre</h2>
                    <p className="instructions">
                        Para hacer cambios introduce primero el nombre, y para
                        confirmar el cambio introduce tu contraseña
                    </p>
                    <form className="editprofile_form">
                        <label className="change-container" for="username">
                            Nombre
                            <input
                                type="text"
                                className="change"
                                onChange={onSelectusername}
                                placeholder="Introduce tu nuevo nombre"
                            />
                        </label>
                        <label className="change-container" for="username">
                            Contraseña
                            <input
                                className="change"
                                type="password"
                                onChange={onSelectOldPassword}
                                placeholder="Introduce la contraseña"
                            />
                        </label>
                        {error && (
                            <div className="uploadimage_error_label">
                                <ImWarning />
                                {error}
                            </div>
                        )}
                        <input
                            className="upload-changes"
                            type="submit"
                            value="Subir"
                            onClick={editUsername}
                        />
                    </form>
                </div>
            </div>
            <div id="modal2" class="modalmask">
                <div class="modalbox movedown">
                    <a href="#close" title="Close" class="close">
                        X
                    </a>
                    <h2 className="tittle-edit">Email</h2>
                    <p className="instructions">
                        Para hacer cambios introduce primero el email, y para
                        confirmar el cambio introduce tu contraseña
                    </p>
                    <form className="editprofile_form">
                        <label className="change-container" for="email">
                            Email
                            <input
                                type="email"
                                onChange={onSelectEmail}
                                placeholder="Introduce el nuevo email"
                                className="change"
                            />
                        </label>
                        <label className="change-container" for="username">
                            Contraseña
                            <input
                                type="password"
                                onChange={onSelectOldPassword}
                                className="change"
                                placeholder="Introduce la contraseña"
                            />
                        </label>
                        {error && (
                            <div className="uploadimage_error_label">
                                <ImWarning />
                                {error}
                            </div>
                        )}
                        <input
                            className="upload-changes"
                            type="submit"
                            value="Subir"
                            onClick={editMail}
                        />
                    </form>
                </div>
            </div>
            <div id="modal3" class="modalmask">
                <div class="modalbox movedown">
                    <a href="#close" title="Close" class="close">
                        X
                    </a>
                    <h2 className="tittle-edit">Contraseña</h2>
                    <p className="instructions">
                        Para hacer cambios introduce primero la contraseña, y
                        para confirmar el cambio introduce tu nueva contraseña
                    </p>
                    <form className="editprofile_form">
                        <label className="change-container" for="email">
                            Contraseña actual
                            <input
                                type="password"
                                onChange={onSelectOldPassword}
                                placeholder="Introduce tu contraseña"
                                className="change"
                            />
                        </label>
                        <label className="change-container" for="username">
                            Nueva contraseña
                            <input
                                type="password"
                                onChange={onSelectNewPassword}
                                placeholder="Introduce la nueva contraseña"
                                className="change"
                            />
                        </label>
                        {error && (
                            <div className="uploadimage_error_label">
                                <ImWarning />
                                {error}
                            </div>
                        )}
                        <input
                            className="upload-changes"
                            type="submit"
                            value="Subir"
                            onClick={editPassword}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EditCall;
