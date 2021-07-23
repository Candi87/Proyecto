import { useState } from 'react';
import { TiBook } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Title,
    P,
    Input,
    Button,
    Form,
    GrupoInput,
    IconValidate,
    Error,
    MensajeError,
    ErrorForm,
    LinkLogin,
} from '../../estilos/estilos';
import './register-form.css';
import useBackgroundImg from '../../customHooks/useBackgroundImg';
import myBackGroundImg from '../../assets/camino4.jpg';

import {
    faCheckCircle,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

function RegisterForm() {
    useBackgroundImg(myBackGroundImg);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const expresiones = {
        nickname: /^[a-zA-Z0-9\_\-]{4,30}$/,
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    function onSubmitRegister(event) {
        event.preventDefault();

        async function registerConfirm() {
            const response = await fetch('http://localhost:4000/usuarios/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    nickname,
                }),
            });

            const data = await response.json();

            setConfirmEmail(`Valida tu cuenta de correo ${data.email} `);
        }
        registerConfirm();
    }

    return (
        <div className="fondo">
            <Title>
                <TiBook className="icono" />A GUÍA DO CAMIÑO
            </Title>
            <div className="register-form">
                <Form onSubmit={onSubmitRegister}>
                    <label className="datos-container">
                        <label className="datos-container">
                            <GrupoInput>
                                <Input
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    type="text"
                                    placeholder="Ingrese su Nombre y Apellidos"
                                    leyendaError="El usuario tiene que ser min de 4 a 30 gígitos y sólo puede contener letras"
                                    // expresiones={}
                                />
                                <IconValidate icon={faCheckCircle} />
                            </GrupoInput>
                            <Error>Rellene este campo</Error>
                        </label>
                        <GrupoInput>
                            <Input
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                type="text"
                                placeholder="Ingrese su email"
                            />
                            <IconValidate icon={faCheckCircle} />
                        </GrupoInput>
                        <Error>Error</Error>
                    </label>
                    <label className="datos-container">
                        <GrupoInput>
                            <Input
                                value={nickname}
                                onChange={(event) =>
                                    setNickName(event.target.value)
                                }
                                type="text"
                                placeholder="Ingrese el Nombre de Usuario"
                            />
                            <IconValidate icon={faCheckCircle} />
                        </GrupoInput>
                        <Error>Error</Error>
                    </label>
                    <label className="datos-container">
                        <GrupoInput>
                            <Input
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                type="password"
                                placeholder="Ingrese su Contraseña"
                            />
                            <IconValidate icon={faCheckCircle} />
                        </GrupoInput>
                        <Error>Error</Error>
                        <label className="datos-container">
                            <GrupoInput>
                                <Input
                                    value={repeatPassword}
                                    onChange={(event) =>
                                        setRepeatPassword(event.target.value)
                                    }
                                    type="password"
                                    placeholder="Repita su Contraseña"
                                />
                                <IconValidate icon={faCheckCircle} />
                            </GrupoInput>
                            <Error>Error</Error>
                        </label>
                        <div>
                            <p className="terminos">
                                Al hacer clic en Registrar, aceptas nuestros
                                términos y condiciones.
                            </p>
                            <Button type="submit">Registrar</Button>
                        </div>
                        <LinkLogin>
                            <Link to="/login">
                                <P>Ya tengo cuenta</P>
                            </Link>
                        </LinkLogin>

                        {false && (
                            <MensajeError>
                                <ErrorForm>
                                    <FontAwesomeIcon
                                        icon={faExclamationTriangle}
                                    />
                                    <b> Error :</b> Por favor rellena el
                                    formulario correctamente
                                </ErrorForm>
                            </MensajeError>
                        )}
                        {confirmEmail && <div>{confirmEmail} </div>}
                    </label>
                </Form>
            </div>
        </div>
    );
}
export default RegisterForm;
