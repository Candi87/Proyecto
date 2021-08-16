import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Input, Button, P1, FormLogin } from '../../estilos/estilos';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onSubmitLogin(event) {
        event.preventDefault();

        async function performLogin() {
            const response = await fetch(
                'http://localhost:4000/usuarios/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();
            const idUsuario = data.data.idUsuario;

            console.log(data);

            if (!response.ok) {
                setError(data.message);
            } else {
                sessionStorage.setItem('token', data.data.token);

                history.push(`/usuarios/${idUsuario}/tendencias
                `);
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
                    <FormLogin onSubmit={onSubmitLogin}>
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
