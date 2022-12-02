import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';

export default function AddTaskPopup({
    onChange, handleClose, open, value = '', onSave, addmode = true
}) {
    const [name, setName] = React.useState(value)
    const handleTaskChange = (e) => setName(e.target.value)
    const handleSave = () => {
        onSave && onSave(name)
        setName('')
        handleClose();
    }
    useEffect(() => {
        if (value && value !== name) {
            setName(value)
        }

    }, [value])

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{className:"add_new_task_container"}} >
            <DialogTitle>{addmode ? '+ New Task' : 'Edit Task'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    // margin="dense"
                    onChange={handleTaskChange}
                    placeholder="Task Name"
                    value={name}
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" fullWidth disabled={!name} onClick={handleSave}>{addmode ? "+ New task" :
                    "Update Task"}</Button>
            </DialogActions>
        </Dialog>
    )
}
