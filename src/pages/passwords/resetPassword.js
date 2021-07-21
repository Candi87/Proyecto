import { useState } from 'react';
import { TiBook } from 'react-icons/ti';
import styled from 'styled-components';
import './resetPassword.css';

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

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    function onSubmitResetPassword(event) {
        event.preventDefault();
        const error = validateResetPassword(email);
        if (error) {
            setError(error);
            return;
        }
        async function resetPasswordConfirm() {
            const response = await fetch(
                'http://localhost:4000/usuarios/password/recover/',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
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
        }
        resetPasswordConfirm();
        setError('');
    }
    return (
        <div className="fondo-reset-pass">
            <Title>
                <TiBook className="icono" />A GUÍA DO CAMIÑO
            </Title>
            <Form onSubmit={onSubmitResetPassword}>
                <label>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="text"
                        placeholder="email"
                    ></Input>
                    {error && <div className="error-label">{error}</div>}
                </label>
                <Button type="submit" value="Enviar">
                    Enviar
                </Button>
            </Form>
        </div>
    );
}
export default ResetPassword;
function validateResetPassword(email) {
    if (!email) {
        return 'introduce el email si queires cambiar la contraseña atontao';
    }
}
