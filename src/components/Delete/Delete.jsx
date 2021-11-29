import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Snackbar from '@mui/material/Snackbar';

function Delete() {

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick1 = () => {
        setOpen1(true);
        setOpen(false);
    };

    const handleClick2 = () => {
        setOpen2(true);
        setOpen(false);
    };

    const snackbarClose = () => {
        setOpen1(false);
        setOpen2(false);
    }

    return (
        <div>
            <button onClick={handleClickOpen}>Delete</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Are you Sure you want to Delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick1}>Yes</Button>
                    <Button onClick={handleClick2}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open1}
                autoHideDuration={2000}
                onClose={snackbarClose}
                message="Element deleted Successfully!"
            />
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open2}
                autoHideDuration={2000}
                onClose={snackbarClose}
                message="Unable to delete Assessment!"
            />
        </div>
    )
}

export default Delete
