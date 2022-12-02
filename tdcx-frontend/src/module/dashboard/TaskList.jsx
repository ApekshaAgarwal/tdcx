import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '../../components/UI/Alert';
import AddTaskPopup from './AddTaskPopup';
import { Typography } from '@mui/material';

export default function TaskList({ tasks, deleteTask, updateTask,search  }) {
  const [deleteConfirm, setDeleteConfirm] = React.useState({ status: false, item: null });
  const [openEditPopup, setopenEditPopup] = React.useState({ visible: false, data: null })


  const confirmDelete = (data) => {
    setDeleteConfirm({ status: true, item: data })
  }
  const handleDelete = () => {
    const data = deleteConfirm.item
    deleteTask(data);
    setDeleteConfirm({ status: false, item: null })
  }
  const handleChange = (data) => {
    let updatedData = { ...data }
    updatedData.completed = !data.completed
    updateTask(updatedData);
    setDeleteConfirm({ status: false, item: null })
  }
  const editPopupClose = () => {
    setopenEditPopup({ visible: false, data: null })
  }
  const editPopupOpen = (data) => {
    setopenEditPopup({ visible: true, data })
  }
  const handleEditSave = (name) => {
    const updatedData = { ...openEditPopup.data }
    updatedData.name = name
    updateTask(updatedData)
    setopenEditPopup({ visible: false, data: null })
  }
  let taskList=tasks
  if(search){
    taskList= tasks.filter((o)=>o.name.toLowerCase().includes(search.toLowerCase()));
  }
  if(taskList.length===0){
    return <Typography sx={{ display: "inline" }} variant="h6" component="h6">No Task Found</Typography>
  }
  return (
    <>
      <List className='task_list' sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {taskList.map((data) => {
          const labelId = `checkbox-list-label-${data._id}`;

          return (
            <ListItem
              divider
              key={data._id}
              secondaryAction={
                <>
                  <IconButton onClick={() => editPopupOpen(data)} edge="end" aria-label="comments">

                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => confirmDelete(data)} edge="end" aria-label="comments">

                    <DeleteIcon />
                  </IconButton>


                </>


              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => handleChange(data)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={data.completed}
                    tabIndex={-1}
                    disableRipple
                    onChange={() => handleChange(data)}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText className={ data.completed ? "strike" : "" } id={labelId} primary={data.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <AddTaskPopup
        open={openEditPopup.visible}
        handleClose={editPopupClose}
        value={openEditPopup.data?.name || ''}
        onSave={handleEditSave}
        addmode={false}
      />
      <Alert className='delete_alert' visible={deleteConfirm.status} onOk={handleDelete} onClose={() =>
        setDeleteConfirm({ status: false, item: null })
      } content={
        `Are you sure want to delete task ${deleteConfirm?.item?.name}?`
      } type="confirm" />
    </>
  );
}
