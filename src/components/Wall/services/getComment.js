export default async function getComment({ keyword }) {
    return await fetch(`http://localhost:4000/usuarios/photos/comments`)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            const images = data.map((image) => {
                const { id, idImagen, fechaCreacion, comentario, idUsuario } =
                    image;

                return { id, idImagen, fechaCreacion, comentario, idUsuario };
            });
            if (keyword) {
                let newImages = images.filter((image) => {
                    if (image.idImagen === Number(keyword)) {
                        console.log('Image :', image);
                        return image;
                    }
                });
                return newImages;
            } else {
                return images;
            }
        });
}
// export default async function getComment({ keyword }) {
//     return await fetch(`http://localhost:4000/usuarios/photos/comments`)
//         .then((res) => res.json())
//         .then((response) => {
//             const { data } = response;
//             const images = data.map((image) => {
//                 const { id, idImagen, fechaCreacion, comentario, idUsuario } =
//                     image;
//                 console.log(
//                     'Data getComment: ',
//                     id,
//                     idImagen,
//                     fechaCreacion,
//                     comentario,
//                     idUsuario
//                 );

//                 return { id, idImagen, fechaCreacion, comentario, idUsuario };
//             });
//             if (keyword) {
//                 let newImages = images.filter((image) => {
//                     if (image.idImagen === Number(keyword)) {
//                         console.log('Image :', image);
//                         return image;
//                     }
//                 });
//                 console.log('NewImages: ', newImages);
//                 return newImages;
//             } else {
//                 console.log('else images: ', images);
//                 return images;
//             }
//         });
// }
