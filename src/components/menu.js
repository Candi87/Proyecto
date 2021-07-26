import React, { useState } from 'react';
import { BiBookAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { SidebarData } from './sidebardata';
import './menu.css';

function Menu() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <BiBookAlt onClick={showSidebar} />
                    Menu
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <GrClose />
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
        </>
    );
}

export default Menu;
