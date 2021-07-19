import { useState } from 'react';
import { TiBook } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    background-color: black;
    color: white;
    margin-top: 40px;

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
const P1 = styled.p`
    font-size: 16px;
    margin-bottom: 8px;
`;
const P2 = styled.p`
    font-size: 14px;
    margin-bottom: 8px;
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

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    function onSybmitResetPassword(event) {
        event.preventDefault();
        // const error = validateResetPassword(email);

        if (error) {
            setError(error);
            return;
        }
        async function emailConfirm() {
            const response = await fetch(
                'http://localhost:4000/:idUsuario/password',
                {
                    method: 'PUT',
                    HEADERS: {
                        'Content-Type': 'aplication/json',
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );
            const data = await response.json();

            if (data.message) {
                setError(data.message);
                return;
            }
            setConfirmEmail('');
        }
        emailConfirm('');
    }
    return (
        <div>
            <Title>
                <TiBook className="icono" />A GUÍA DO CAMIÑO
            </Title>

            <Form onSubmit={onSybmitResetPassword}>
                <P1>Recupera tu contraseña </P1>
                <P2>
                    Introduce tu correo electrónico o número de móvil para
                    recuperar tu contraseña.
                </P2>
                <label>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        placeholder="email"
                    ></Input>
                </label>
                <div>
                    <Button type="submit">Send email</Button>
                </div>
            </Form>
        </div>
    );
}
export default ResetPassword;
