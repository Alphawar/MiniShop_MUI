import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Snack = ({isOpen, setIsSnackOpen}) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={() => setIsSnackOpen(false)}
            autoHideDuration={3000}
            severity="success"
        >
            <Alert>
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
};

export default Snack;