import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { SidebarData } from './sidebardata';
import './menu.css';

import { RiMenuFoldFill } from 'react-icons/ri';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import Blog from '../modal/Blog';

function Menu() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <RiMenuUnfoldFill
                            className="icono-opciones"
                            onClick={showSidebar}
                        />
                    </Link>

                    <h1>A GUÍA DO CAMIÑO</h1>

                    <Blog />
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <RiMenuFoldFill className="icono-cerrar" />
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
