import Menu from '../../components/menologeado/menu';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ListProfilePhotos from './components/ListProfilePhotos';

import './profile.css';
import SelectPhoto from './components/SelectPhoto';
import ShowNickname from './components/ShowNickname';
import AddProfilePhoto from './components/AddProfilePhoto';
import GetAvatarPhoto from './components/GetAvatarPhoto';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { MdAddAPhoto } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';

let idLogin = sessionStorage.getItem('idusuario');

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
    const { idUsuario } = useParams();
    const keyword = idUsuario;
    console.log('userid de profile', idUsuario);

    const openCloseModal = () => {
        setModal(!modal);
    };

    const body = (
        <div className={styles.modal}>
            <div className="header">
                <h3 className="tittle-modal">Actualiza tu foto de perfil</h3>

                <AddProfilePhoto />
                <button
                    className="button-close-photo"
                    onClick={() => openCloseModal()}
                >
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className="listofprofilephotos">
                <SelectPhoto />
                <ListProfilePhotos keyword={keyword} />
            </div>
        </div>
    );
    if (idLogin === idUsuario) {
        return (
            <div>
                <Menu />
                <div className="user-info-container">
                    <GetAvatarPhoto
                        className="photo-profile"
                        alt="fotos-profile"
                    />

                    <button
                        onClick={() => openCloseModal()}
                        className="button-profile-photo"
                    >
                        <MdAddAPhoto />
                    </button>
                    <ShowNickname className={' email'} />

                    <Modal
                        className="color"
                        open={modal}
                        onClose={openCloseModal}
                    >
                        {body}
                    </Modal>
                </div>
                <div className="listofimages-profile">
                    <ListProfilePhotos keyword={keyword} />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Menu />
                <div className="user-info-container">
                    <GetAvatarPhoto
                        className="photo-profile"
                        alt="fotos-profile"
                    />

                    <ShowNickname className={'email-user email'} />
                </div>
                <div className="listofimages-profile">
                    <ListProfilePhotos keyword={keyword} />
                </div>
            </div>
        );
    }
}
export default Profile;
