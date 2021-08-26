import { useLocation } from 'wouter';
import './collagePhoto.css';

export default function Result({ id, idUsuario, descripcion, url, likes }) {
    const [path, setPath] = useLocation();
    const handleImage = (event) => {
        event.preventDefault();
        setPath(`/uploads/${id}`);
    };

    return (
        <a href={`/usuarios/${idUsuario}/photos/${id}`} className="Result">
            <img
                src={url}
                alt="Imágen no disponible"
                className="collage-photos"
            />
        </a>
    );
}
