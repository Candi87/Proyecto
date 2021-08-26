import './fotosUsuarios.css';
import HorizontalScroll from 'react-scroll-horizontal';
import fotoperfil from '../../assets/fotoperfil.jpg';

import GetNickname from './services/GetNicknames';

function FotosUsuarios() {
    return (
        <div>
            <div className="carrusel-fotos-perfil">
                <HorizontalScroll>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <GetNickname />
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                    <div className="fotoperfil-container">
                        <img
                            src={fotoperfil}
                            className="fotoperfil"
                            alt="fotos-wall"
                        />
                        <p>username</p>
                    </div>
                </HorizontalScroll>
            </div>
        </div>
    );
}
export default FotosUsuarios;
