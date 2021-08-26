import Menu from '../../components/menologeado/menu';
import React, { useState } from 'react';
import ListProfilePhotos from './components/ListProfilePhotos';
import fotoperfil from '../../assets/fotoperfil.jpg';
import './profile.css';
import SelectPhoto from './components/SelectPhoto';
import ShowNickname from './components/ShowNickname';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { MdAddAPhoto } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';

let idUsuario = sessionStorage.getItem('idusuario');
const keyword = idUsuario;

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: '600px',
        height: '700px',
        backgroundColor: 'white',
        marginTop: '180px',
        marginLeft: '31.6%',
        transform: 'traslate(-50%, -50%)',
        alignItems: 'center',
        borderRadius: '4px',
        textAlign: 'center',
        overflow: 'auto',
    },
}));
function Profile() {
    const styles = useStyles();
    const [modal, setModal] = useState(false);

    const openCloseModal = () => {
        setModal(!modal);
    };

    const body = (
        <div className={styles.modal}>
            <div className="header">
                <h3 className="tittle-modal">Actualiza tu foto de perfil</h3>

                <button className="button-changue-profile-photo">
                    Subir foto perfil
                </button>
                <button
                    className="button-close-photo"
                    onClick={() => openCloseModal()}
                >
                    <AiFillCloseCircle />
                </button>
            </div>

            <SelectPhoto />
            <div className="listofprofilephotos">
                <ListProfilePhotos keyword={keyword} />
            </div>
        </div>
    );
    return (
        <div>
            <Menu />
            <div className="user-info-container">
                <img
                    src={fotoperfil}
                    className="photo-profile"
                    alt="fotos-profile"
                />

                <button
                    onClick={() => openCloseModal()}
                    className="button-profile-photo"
                >
                    <MdAddAPhoto />
                </button>
                <ShowNickname />

                <Modal className="color" open={modal} onClose={openCloseModal}>
                    {body}
                </Modal>
            </div>
            <div className="listofimages-profile">
                <ListProfilePhotos keyword={keyword} />
            </div>
        </div>
    );
}
export default Profile;
