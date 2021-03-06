async function getImage({ keyword }) {
    return await fetch(`http://localhost:4000/usuarios/photos/all`)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response;
            const images = data.map((image) => {
                const { url, descripcion, id, idUsuario, likes } = image;
                return { url, descripcion, id, idUsuario, likes };
            });
            if (keyword) {
                let newImages = images.filter((image) => {
                    if (image.id === Number(keyword)) {
                        console.log('Image :', image);
                        return image;
                    }
                });
                console.log('NewImages: ', newImages);
                return newImages;
            } else {
                console.log('else images: ', images);
                return images;
            }
        });
}

export default getImage;
