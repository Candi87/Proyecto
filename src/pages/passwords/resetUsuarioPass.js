import { useState } from 'react';
import { TiBook } from 'react-icons/ti';
import { Title, Input, Button, Form } from '../../estilos/estilos';
import useBackGroundImg from '../../customHooks/useBackgroundImg';
import myBackGroundImg from '../../assets/camino5.jpg';
import { useHistory } from 'react-router-dom';

function ResetUsuarioPass() {
    useBackGroundImg(myBackGroundImg);

    const history = useHistory();

    const [recoverCode, setRecoverCode] = useState('');
    const [newPassword, setNewPasswor] = useState('');
    const [repeatNewPassWord, setrepeatNewPassWord] = useState('');
    const [error, setError] = useState('');

    function onSubmitResetUsuarioPass(event) {
        event.preventdefault();
        const error = validateResetUsuariosPass(recoverCode);
        if (error) {
            setError(error);
            return;
        }
        async function resetUsuarioPassConfirm() {
            const response = await fetch(
                'http://localhost:4000/usuarios/password/reset',
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        recoverCode,
                        newPassword,
                    }),
                }
            );

            const data = await response.json();
            if (!response.ok) {
                setError(data.message);
                return;
            } else {
                history.push('/login');
            }
        }
        resetUsuarioPassConfirm();
        setError('');
    }

    return (
        <div className="fondo-resetUserPass">
            <Title>
                <TiBook className="icono" />A GUÍA DO CAMIÑO
            </Title>
            <Form onSubmit={onSubmitResetUsuarioPass}>
                <label>
                    <Input
                        value={recoverCode}
                        onChange={(event) => setRecoverCode(event.target.value)}
                        type="password"
                        placeholder="Código de recuperación"
                    ></Input>
                </label>
                <label>
                    <Input
                        value={newPassword}
                        onChange={(event) => setNewPasswor(event.target.value)}
                        type="password"
                        placeholder="Introduce la contraseña nueva"
                    ></Input>
                </label>
                <label>
                    <Input
                        value={repeatNewPassWord}
                        onChange={(event) =>
                            setrepeatNewPassWord(event.target.value)
                        }
                        type="password"
                        placeholder="Repite la nueva contraseña"
                    ></Input>

                    <Button type="submit">Actualizar</Button>
                    {error && <div className="error-label">{error} </div>}
                </label>
            </Form>
        </div>
    );
}
export default ResetUsuarioPass;

function validateResetUsuariosPass(
    recoverCode,
    newPassword,
    repeatNewPassWord
) {
    if (!recoverCode) {
        return 'El código de recuperación que estas introduceindo no es el correcto, anda corta y pega que te será más fácil';
    }
    if (!newPassword) {
        return 'A ver, ¿quieres cambiar la contraseña y no la estás introduciendo?';
    }
    if (!repeatNewPassWord) {
        return 'A ver, ¿quieres cambiar la contraseña y no la estás introduciendo?';
    }

    const isValidPassword = newPassword === repeatNewPassWord;
    if (!isValidPassword) {
        return 'Las contraseñas no coinciden, escríbela con calma, seguramente tu madre te dijo algún día que las prisas no son buenas';
    }
}
