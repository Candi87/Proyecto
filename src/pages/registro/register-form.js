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
    PTerminos,
} from '../../estilos/estilos';
import './register-form.css';
import useBackGroundImg from '../../customHooks/useBackgroundImg';
import myBackGroundImg from '../../assets/camino12.jpg';
import {
    faCheckCircle,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

function RegisterForm() {
    useBackGroundImg(myBackGroundImg);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

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
                                            setRepeatPassword(
                                                event.target.value
                                            )
                                        }
                                        type="password"
                                        placeholder="Repita su Contraseña"
                                    />
                                    <IconValidate icon={faCheckCircle} />
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
        </div>
    );
}
export default RegisterForm;
