import React from 'react';

import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { MdAddAPhoto } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { FiUnlock } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Editar Perfil',
        path: '/',
        icon: <CgProfile />,
        cName: 'nav-text',
    },
    {
        title: 'Cambiar Contraseña',
        path: '/',
        icon: <FiUnlock />,
        cName: 'nav-text',
    },
    {
        title: 'Subir Foto',
        path: '/',
        icon: <MdAddAPhoto />,
        cName: 'nav-text',
    },
    {
        title: 'Contacto',
        path: '/',
        icon: <HiOutlineMail />,
        cName: 'nav-text',
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <RiLogoutBoxLine />,
        cName: 'nav-text',
    },
    {
        title: 'Buscar',
        path: '/search',
        icon: <BsSearch />,
        cName: 'nav-text',
    },
];
