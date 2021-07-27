import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Input, Button, P1, FormLogin } from '../../estilos/estilos';
import useBackGroundImg from '../../customHooks/useBackgroundImg';
import myBackGroundImg from '../../assets/camino7.jpg';

function Login() {
    useBackGroundImg(myBackGroundImg);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function submitLogin(event) {
        event.preventDefault();
        const error = validateLogin(email, password);
        if (error) {
            setError(error);
            return;
        }
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
        <div className="main_page_land">
            <div className="main_page_screens"></div>
            <div className="main_page_access">
                <div className="main_page_access_titles">
                    <h1 className="title_1">
                        Bienvenido a la web del Camino de Santiago
                    </h1>
                </div>
                <div className="main_page_access_buttons">
                    <FormLogin submit={submitLogin}>
                        <label className="datos-container-login">
                            <Input
                                className="datos-login"
                                value={email}
                                type="email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="email"
                            />
                        </label>
                        <label className="datos-container">
                            <Input
                                className="datos-login"
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="contraseña"
                            ></Input>
                            {error && (
                                <div className="error-label">{error}</div>
                            )}
                        </label>
                        <div>
                            <Button type="submit">Login</Button>
                            <div>
                                <Link to="register">
                                    <P1>No tengo cuenta</P1>
                                </Link>
                                <Link to="resetpassword">
                                    <P1>Has olvidado tú contraseña</P1>
                                </Link>
                            </div>
                        </div>
                    </FormLogin>
                </div>
            </div>
        </div>
    );
}
export default Login;

function validateLogin(email, password) {
    if (!email) {
        return `Email o contraseña incorrectos`;
    }
    if (!password) {
        return `Email o contraseña incorrectos`;
    }
}
