import { useState } from 'react';
import styled from 'styled-components';
import { TiBook } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import './login.css';

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
    margin-top: 200px;
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
    font-size: 10px;
    margin-left: 30px;

    &:hover {
        text-decoration: underline;
    }
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function submitLogin(event) {
        event.preventDefault();
        async function performLogin() {
            const response = await fetch(
                'http://localhost:4000/usuarios/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'aplication/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            const data = response.json();
            console.log(data);
            if (data.httpStatusCode) {
                setError(data.message);
            } else {
            }
        }
        performLogin();
    }
    return (
        <div className="fondo-login">
            <Title>
                <TiBook className="icono" />A GUÍA DO CAMIÑO
            </Title>

            <Form submit={submitLogin}>
                <label className="datos-container-login">
                    <Input
                        className="datos-login"
                        value={email}
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="email"
                    />
                </label>
                <label className="datos-container">
                    <Input
                        className="datos-login"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="contraseña"
                    ></Input>
                </label>
                <div>
                    <Button type="submit">Login</Button>
                    <div>
                        <Link to="register">
                            <P>No tengo cuenta</P>
                        </Link>
                        <Link to="resetpassword">
                            <P>Has olvidado tú contraseña</P>
                        </Link>
                    </div>
                </div>
            </Form>
        </div>
    );
}
export default Login;
//TODO: HACER ERRORES
