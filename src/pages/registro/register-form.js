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

function RegisterForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorPass, setErrorPassword] = useState('');
    const [errorNick, setErrorNickname] = useState('');
    const [failName, setFailName] = useState(false);
    const [failMail, setFailMail] = useState(false);
    const [failPassword, setFailPassword] = useState(false);
    const [failNickname, setFailNickname] = useState(false);

    function onSubmitRegister(event) {
        event.preventDefault();

        if (!name) {
            setFailName(true);
            setErrorName('Introduce un nombre válido');
            return;
        }
        if (!email) {
            setFailMail(true);
            setErrorMail('Introduce un email válido');
            return;
        }
        if (!password) {
            setFailPassword(true);
            setErrorPassword('Introduce una contraseña válido');
            return;
        }
        if (!nickname) {
            setFailNickname(true);
            setErrorNickname('Introduce un nombre de usuario válido');
            return;
        }

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
                    <h1 className="title_1">
                        Mejora tú experiencia registrándote
                    </h1>
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
                                    />
                                    {failName ? (
                                        <span className="error-register">
                                            {errorName}
                                        </span>
                                    ) : (
                                        <span></span>
                                    )}
                                </GrupoInput>
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
                                {failMail ? (
                                    <span className="error-register">
                                        {errorMail}
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </GrupoInput>
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
                                {failNickname ? (
                                    <span className="error-register">
                                        {errorNick}
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </GrupoInput>
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
                                {failPassword ? (
                                    <span className="error-register">
                                        {errorPass}
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </GrupoInput>

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
function validateRegisterForm(password, repeatPassword) {
    if (!password) {
        return 'El campo Contraseña es obligatorio';
    }

    const isValidPassword = password === repeatPassword;

    if (!isValidPassword) {
        return 'Las contraseñas deben coincidir';
    }
}
