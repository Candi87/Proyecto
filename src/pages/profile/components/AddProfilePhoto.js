import React from 'react';

import CustomModal from '../../../components/modal/CustomModal';
import { useModalWithData } from '../../../customHooks/useModal';
import '../profile.css';

function AddProfilePhoto() {
    const [setIsModalOpened, isModalOpened, modalData, setModalData] =
        useModalWithData();

    return (
        <div>
            <CustomModal
                isActive={isModalOpened}
                handleClose={() => setIsModalOpened(false)}
            ></CustomModal>
            <button
                className="button-changue-profile-photo"
                onClick={() => {
                    setModalData('subir imagen');
                    setIsModalOpened(true);
                }}
            >
                Subir foto de perfil
            </button>
        </div>
    );
}

export default AddProfilePhoto;
