import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bloomer';
import UploadImage from './UploadImg';
import './modal.css';
const CustomModal = ({ isActive, handleClose, image }) => {
    return (
        <Modal isActive={isActive}>
            <div className="uploadimage_div">
                <UploadImage handleClose={handleClose} image={image} />
                <button
                    className="uploadimage_closebutton"
                    onClick={handleClose}
                >
                    X
                </button>
            </div>
        </Modal>
    );
};

CustomModal.propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};
export default CustomModal;
