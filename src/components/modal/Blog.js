import React from 'react';
import { useModalWithData } from '../../customHooks/useModal';
import CustomModal from './CustomModal';
import { MdAddAPhoto } from 'react-icons/md';
import './modal.css';

function Blog() {
    const [setIsModalOpened, isModalOpened, modalData, setModalData] =
        useModalWithData();

    return (
        <div className="button-upload-img">
            <CustomModal
                isActive={isModalOpened}
                handleClose={() => setIsModalOpened(false)}
            ></CustomModal>
            <MdAddAPhoto
                className="MdAddAPhoto"
                onClick={() => {
                    setModalData('subir imagen');
                    setIsModalOpened(true);
                }}
            />
        </div>
    );
}

export default Blog;
