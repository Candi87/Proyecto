import './fotosUsuarios.css';
import HorizontalScroll from 'react-scroll-horizontal';

import AvatarTrendings from './services/AvatarTrendings';

function FotosUsuarios() {
    return (
        <div>
            <div className="carrusel-fotos-perfil">
                <HorizontalScroll>
                    <div className="fotoperfil-container">
                        <AvatarTrendings />
                    </div>
                </HorizontalScroll>
            </div>
        </div>
    );
}
export default FotosUsuarios;
