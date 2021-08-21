import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
    PTerminos,
} from '../../estilos/estilos';
import './register-form.css';

import {
    faCheckCircle,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

function RegisterForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState([
        {
            field: 'name',
            error: 'Introduce un Nombre',
        },
        {
            field: 'email',
            error: 'Introduce un email válido',
        },
        {
            field: 'password',
            error: 'Introduce una contraseña correcta',
        },
        {
            field: 'repeatPassword',
            error: 'Las contraseñas no coinciden',
        },
        {
            field: 'nickname',
            error: 'El nombre de Usuario ya está existe',
        },
        {
            field: 'confirmEmail',
            error: 'Los emails no coinciden',
        },
    ]);
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
            if (!response.ok) {
                setError(data.message);
                return;
            } else {
                history.push('/login');
            }

            setConfirmEmail(`Valida tu cuenta de correo ${data.email} `);
        }
        registerConfirm();
    }

    return (
        <div className="main_page_land">
            <div className="main_page_screens"></div>
            <div className="main_page_access">
                <div className="main_page_access_titles">
                    <h1 className="title_1">¡ Regístrate ya !</h1>
                </div>
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
                                    />
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
                            </GrupoInput>
                            <Error>Error</Error>
                            <label className="datos-container">
                                <GrupoInput>
                                    <Input
                                        value={repeatPassword}
                                        onChange={(event) =>
                                            setRepeatPassword(
                                                event.target.value
                                            )
                                        }
                                        type="password"
                                        placeholder="Repita su Contraseña"
                                    />
                                </GrupoInput>
                                <Error>Error</Error>
                            </label>
                            <div>
                                <PTerminos className="terminos">
                                    Al hacer clic en Registrar, aceptas nuestros
                                    términos y condiciones.
                                </PTerminos>
                                <Button type="submit">Registrar</Button>
                            </div>
                            <LinkLogin>
                                <Link to="/login">
                                    <P>Ya tengo cuenta</P>
                                </Link>
                            </LinkLogin>
                        </label>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default RegisterForm;

// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [repeatPassword, setRepeatPassword] = useState('');
// const [nickname, setNickName] = useState('');
// const [confirmEmail, setConfirmEmail] = useState('');
function validateRegisterForm(
    name,
    password,
    repeatedPassword,
    nickname,
    email
) {
    if (!name) {
        return 'El campo Nombre y Apellido es obligatorio';
    }
    if (!email) {
        return 'El campo Email es obligatorio';
    }

    if (!password) {
        return 'El campo Contraseña es obligatorio';
    }

    if (!repeatedPassword) {
        return 'El campo Repite Contraseña es obligatorio';
    }

    if (!nickname) {
        return 'El campo Nombre de Usuario es obligatorio';
    }

    const isValidPassword = password === repeatedPassword;

    if (!isValidPassword) {
        return 'Las contraseñas deben coincidir';
    }
}
