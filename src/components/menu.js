import { Link } from 'react-router-dom';
import { useState } from 'react';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCog,
    faPlus,
    faSearch,
    faHome,
    faFire,
    faMapMarkerAlt,
    faComments,
    faKey,
    faSignOutAlt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { PMenu } from '../estilos/estilos';

function Menu() {
    return (
        <aside>
            <div className="brand">
                <a href="/#">Avatar</a>
            </div>
            <button className="app-menu__button">
                <div className="app-icon">
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                    <span className="app-icon__component"></span>
                </div>
            </button>
            <nav>
                <button
                    className="menu-collapse"
                    type="button"
                    data-toggle="collapse"
                    data-target="#myContent"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <span className="caret"></span> Acceso Rápido
                </button>
                <div className="collapse in" id="myContent">
                    <ul className="nav">
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faPlus} />
                                Subir Foto
                            </a>
                        </li>
                        <li className>
                            <a href="/#">
                                <FontAwesomeIcon icon={faSearch} />
                                Buscar
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faUser} />
                                Mi Perfil
                            </a>
                            <Link to="/register">
                                <PMenu>Registrar en A Guía do Camiño</PMenu>
                            </Link>
                        </li>
                    </ul>
                </div>

                <button
                    className="menu-collapse"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mainContent"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <span className="caret"></span> Principal
                </button>
                <div className="collapse in" id="mainContent">
                    <ul className="nav">
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faHome} />
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faFire} />
                                Novedades
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                Puntos de interés
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faComments} />
                                Últimas reseñas
                            </a>
                        </li>
                    </ul>
                </div>

                <button
                    className="menu-collapse"
                    type="button"
                    data-toggle="collapse"
                    data-target="#fundNavigation"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <span className="caret"></span> Ajustes
                </button>
                <div className="collapse in" id="fundNavigation">
                    <ul className="nav">
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faUserCog} />
                                Editar perfil
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faKey} />
                                Cambiar contraseña
                            </a>
                        </li>

                        <li>
                            <a href="/#">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

export default Menu;
