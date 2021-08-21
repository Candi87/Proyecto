import React from 'react';

import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { FiUnlock } from 'react-icons/fi';
import { AiOutlineFire } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';

export const SidebarDataNoLogueado = [
    {
        title: 'Registrarse',
        path: '/register',
        icon: <CgProfile />,
        cName: 'nav-text',
    },
    {
        title: 'Login',
        path: '/Login',
        icon: <FiUnlock />,
        cName: 'nav-text',
    },
    {
        title: 'Tendencias',
        path: '/tendencias',
        icon: <AiOutlineFire />,
        cName: 'nav-text',
    },
    {
        title: 'Buscar',
        path: '/search',
        icon: <CgSearch />,
        cName: 'nav-text',
    },
    {
        title: 'Contáctanos',
        path: '/',
        icon: <HiOutlineMail />,
        cName: 'nav-text',
    },
];
