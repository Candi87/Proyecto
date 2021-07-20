import { useState } from 'react';
import { TiBook } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './register-form.css';

const Title = styled.h1`
    background-color: black;
    color: white;

    padding-left: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const Form = styled.form`
    width: 350px;
    background-color: white;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    opacity: 0.8;
`;
const Button = styled.button`
    width: 100%;
    background: #1977f2;
    border: none;
    margin: 16px 0;
    font-size: 16px;
    padding: 12px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #176fe4;
        color: white;
    }
`;

const Input = styled.input`
    width: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    border: 1px solid;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
`;
const P = styled.p`
    text-decoration: none;
    color: blue;
    display: inline-block;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    function onSubmitRegister(event) {
        event.preventDefault();
        const error = validateRegisterForm(
            email,
            password,
            repeatPassword,
            nickname
        );
        if (error) {
            setError(error);
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
                    nickname: nickname,
                }),
            });

            const data = await response.json();

            if (data.message) {
                setError(data.message);
                return;
            }
            setConfirmEmail(`Valida tu cuenta de correo ${data.email} `);
        }
        registerConfirm();
        setError('');
    }
    // function onPressEnterKey(event){
    //     if(event.key ==="Enter"){
    //         onSubmitRegister
    //     }
    // }
    return (
        <div className="fondo">
            <Title>
                <TiBook className="icono" />A GUÍA DO CAMIÑO
            </Title>
            <div className="register-form">
                <Form onSubmit={onSubmitRegister}>
                    <label className="datos-container">
                        <label className="datos-container">
                            <Input
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                type="text"
                                placeholder="Ingrese su Nombre y Apellidos"
                            ></Input>
                        </label>

                        <Input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="text"
                            placeholder="Ingrese su email"
                        ></Input>
                    </label>
                    <label className="datos-container">
                        <Input
                            value={nickname}
                            onChange={(event) =>
                                setNickName(event.target.value)
                            }
                            type="text"
                            placeholder="Ingrese el Nombre de Usuario"
                        />
                    </label>
                    <label className="datos-container">
                        <Input
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            type="password"
                            placeholder="Ingrese su Contraseña"
                        ></Input>
                        <label className="datos-container">
                            <Input
                                value={repeatPassword}
                                onChange={(event) =>
                                    setRepeatPassword(event.target.value)
                                }
                                type="password"
                                placeholder="Repita su Contraseña"
                            />
                        </label>
                        <div>
                            <p className="terminos">
                                Al hacer clic en Registrar, aceptas nuestras
                                Condiciones.
                            </p>
                            <Button type="submit">Registrar</Button>
                        </div>

                        <Link to="/login">
                            <P className="registrado">Ya tengo cuenta</P>
                        </Link>
                        {error && <div className="error-label">{error} </div>}
                        {confirmEmail && <div>{confirmEmail} </div>}
                    </label>
                </Form>
            </div>
        </div>
    );
}
export default RegisterForm;

function validateRegisterForm(email, password, repeatedPassword, username) {
    if (!email) {
        return 'El campo email es obligatorio';
    }

    if (!password) {
        return 'El campo password es obligatorio';
    }

    if (!repeatedPassword) {
        return 'El campo password es obligatorio';
    }

    if (!username) {
        return 'El campo username es obligatorio';
    }

    const isValidPassword = password === repeatedPassword;

    if (!isValidPassword) {
        return 'Las contraseñas deben coincidir';
    }
}
