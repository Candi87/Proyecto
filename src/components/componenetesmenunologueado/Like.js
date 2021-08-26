import './fotosUsuarios.css';
import { useState, useEffect } from 'react';
import { Button } from './botonLike';
import { useParams } from 'react-router-dom';
import getLikes from './services/getLikes';

function Like() {
    let token = sessionStorage.getItem('token');
    let idUsuario = sessionStorage.getItem('idusuario');

    const [totalLikes, setTotalLikes] = useState('0');
    const [step, setStep] = useState(0);

    let { id } = useParams();

    async function darLike() {
        const response = await fetch(
            `http://localhost:4000/usuarios/${idUsuario}/photos/${id}/like`,
            {
                method: 'PUT',

                headers: {
                    authorization: token,
                },
            }
        );
        const data = await response.json();
        setStep(step + 1);
        console.log('numero total de likes', data.data);
    }
    useEffect(
        function () {
            getLikes({ id }).then((results) => {
                setTotalLikes(results[0].likes);
            });
            console.log(totalLikes);
        },
        [, step]
    );

    return (
        <div className="like-container">
            <Button onClick={darLike}></Button>
            <p className="likes-number"> {totalLikes}</p>
        </div>
    );
}
export default Like;

// import './fotosUsuarios.css';
// import { useState, useEffect } from 'react';
// import { Button } from './botonLike';
// import { useParams } from 'react-router-dom';
// import getLikes from './services/getLikes';

// function Like() {
//     const [countLike, setCountLike] = useState(0);
//     const [numberLike, setNumberLike] = useState('');

//     let token = sessionStorage.getItem('token');
//     let idUsuario = sessionStorage.getItem('idusuario');

//     let { id } = useParams();

//     async function darLike() {
//         const response = await fetch(
//             `http://localhost:4000/usuarios/${idUsuario}/photos/${id}/like`,
//             {
//                 method: 'PUT',

//                 headers: {
//                     authorization: token,
//                 },
//             }
//         );
//         const data = await response.json();
//         console.log(data.data.like);
//     }
//     useEffect(
//         function () {
//             getLikes({ id }).then((results) => {
//                 setNumberLike(results[0].likes);
//             });
//             console.log('numberlike:', numberLike);
//         },
//         [countLike]
//     );

//     return (
//         <div>
//             <div className="like-container">
//                 <Button onClick={darLike}></Button>
//                 <p className="likes-number"> {numberLike}</p>
//             </div>
//         </div>
//     );
// }
// export default Like;
