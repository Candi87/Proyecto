import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bloomer';
import UploadImage from './UploadImg';
import './modal.css';
const CustomModal = ({ isActive, handleClose }) => {
    console.log(isActive);
    return (
        <Modal isActive={isActive}>
            <div className="uploadimage_div">
                <UploadImage handleClose={handleClose} />
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
