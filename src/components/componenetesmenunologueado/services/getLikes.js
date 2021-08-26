export default async function getLikes({ id }) {
    return await fetch(`http://localhost:4000/usuarios/photos/all`)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            console.log('data de getlikes', data);
            const images = data.map((image) => {
                const { url, descripcion, id, idUsuario, likes, totalLikes } =
                    image;
                return { url, descripcion, id, idUsuario, likes, totalLikes };
            });
            if (id) {
                let newImages = images.filter((image) => {
                    if (image.id === Number(id)) {
                        return image;
                    }
                });
                console.log('nuevaimagen', newImages);
                return newImages;
            }
        });
}
