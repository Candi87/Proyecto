import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bloomer';
import EditCall from './EditCall';

const EditModal = ({ isActive, handleClose, userInfo }) => {
    console.log(isActive);

    return (
        <Modal isActive={isActive}>
            <div className="uploadimage_div">
                <EditCall userInfo={userInfo} />
                <div>
                    <button
                        onClick={handleClose}
                        className="uploadimage_closebutton"
                    >
                        X
                    </button>
                </div>
            </div>
        </Modal>
    );
};

EditModal.propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};
export default EditModal;
