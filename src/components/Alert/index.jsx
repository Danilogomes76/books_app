import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { Alert, AlertButtons, AlertDescription, AlertTitle } from './style';

function AlertRemove(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen}>Remove</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Alert size={{'@bp1': 'bp1'}}>
                    <AlertTitle>Are you sure you want to remove the book?</AlertTitle>
                    <AlertDescription>
                        <p>the book will be removed from your list.</p>
                        <AlertButtons>
                            <button onClick={() => props.removeFC(props.livro)}>Yes</button>
                            <button onClick={() => handleClose()}>No</button>
                        </AlertButtons>
                    </AlertDescription>
                </Alert>
            </Modal>

        </>
    );
}

export default AlertRemove;