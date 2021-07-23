import { useState } from 'react';
import { TiBook } from 'react-icons/ti';
import { Title, Input, Button, FormResetPassword } from '../../estilos/estilos';
import useBackgroundImg from '../../customHooks/useBackgroundImg';
import myBackgroundImg from '../../assets/camino6.jpg';

function ResetPassword() {
    useBackgroundImg(myBackgroundImg);
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
            <FormResetPassword onSubmit={onSubmitResetPassword}>
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
            </FormResetPassword>
        </div>
    );
}
export default ResetPassword;
function validateResetPassword(email) {
    if (!email) {
        return 'introduce el email si queires cambiar la contraseña atontao';
    }
}
