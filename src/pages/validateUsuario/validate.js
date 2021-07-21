import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function ValidateUser() {
    const query = new URLSearchParams(useLocation().search);
    let history = useHistory();

    const registrationCode = query.get('registrationCode');

    useEffect(() => {
        async function performRegistrationCode() {
            const response = await fetch(
                'http://localhost:4000/usuarios/validate',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'aplication/json',
                    },
                    body: JSON.stringify({
                        registrationCode,
                    }),
                }
            );
            await response.json();
            history.push('/login');
        }
        performRegistrationCode();
    }, [registrationCode, history]);

    return (
        <div>
            Estamos procedediendo a activar su cuenta, no tardaremos nada y si
            tarda cambie de compañía de internet. Atentamente el servicio
            técnico de A Ruta do Camiño
        </div>
    );
}
export default ValidateUser;
