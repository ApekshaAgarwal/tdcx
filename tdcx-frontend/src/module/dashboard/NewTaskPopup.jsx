import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddTaskPopup from './AddTaskPopup';



export default function NewTaskPopup({ addTask, hideMessage = false }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAddNewTask = async (name) => {
        await addTask(name);
        handleClose();

    }
    return (
        <div className="main_container">
            {(hideMessage === false) ?
                <Box>
                    <h3>
                        You have no task.
                    </h3>
                    <Button color="primary" variant="contained" fullWidth onClick={handleClickOpen}>
                        + New Task
                    </Button>
                </Box>
                :
                <Button sx={{ display: (hideMessage) ? 'inline' : 'block' }} color="primary" variant="contained" fullWidth={!hideMessage} onClick={handleClickOpen}>
                    + New Task
                </Button>
            }
            {open &&
                <AddTaskPopup open={open}
                    onSave={handleAddNewTask}
                    handleClose={handleClose}

                />
            }
        </div>
    );
}
