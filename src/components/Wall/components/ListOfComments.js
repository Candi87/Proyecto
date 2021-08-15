import Comments from './Comments';
import { useEffect, useState } from 'react';
import getComment from '../services/getComment';

export default function ListOfComments({ search }) {
    return (
        <div>
            {search.map((singleImage) => (
                <Comments
                    key={singleImage.id}
                    idImagen={singleImage.idImagen}
                    fechaCreacion={singleImage.fechaCreacion}
                    comentario={singleImage.comentario}
                    idUsuario={singleImage.idUsuario}
                />
            ))}
        </div>
    );
}

// import Comments from './Comments';
// import { useEffect, useState } from 'react';
// import getComment from '../services/getComment';

// export default function ListOfComments({ search }) {
//     return (
//         <div>
//             {search.map((singleImage) => (
//                 <Comments
//                     key={singleImage.id}
//                     idImagen={singleImage.idImagen}
//                     fechaCreacion={singleImage.fechaCreacion}
//                     comentario={singleImage.comentario}
//                     idUsuario={singleImage.idUsuario}
//                 />
//             ))}
//         </div>
//     );
// }
