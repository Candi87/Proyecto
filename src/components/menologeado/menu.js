import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { SidebarData } from './sidebardata';
import './menu.css';

import { AiOutlineClose } from 'react-icons/ai';
import { GoGear } from 'react-icons/go';
import { IconContext } from 'react-icons';

function Menu() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <GoGear
                            className="icono-opciones"
                            onClick={showSidebar}
                        />
                    </Link>
                    <img className="searchIcon" src="" alt="search-icon" />
                    <span className="searchText">Search</span>
                    <h1>A GUÍA DO CAMIÑO</h1>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiOutlineClose className="icono-cerrar" />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Menu;
