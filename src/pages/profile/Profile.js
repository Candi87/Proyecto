import Menu from '../../components/menologeado/menu';
import React from 'react';
import ListProfilePhotos from './components/ListProfilePhotos';

function Profile() {
    let idUsuario = sessionStorage.getItem('idusuario');
    const keyword = idUsuario;
    return (
        <div>
            <Menu />
            <ListProfilePhotos keyword={keyword} />
        </div>
    );
}
export default Profile;
