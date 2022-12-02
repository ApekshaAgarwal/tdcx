import SearchIcon from '@mui/icons-material/Search';
import { Backdrop, List, ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import NewTaskPopup from './NewTaskPopup';
import TaskList from './TaskList';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: 150,
  color: theme.palette.text.secondary,
}));

export default function Dashboard({ getTask, tasks, deleteTask, taskLoading, totalTasks, completedTasks, addTask, updateTask }) {
  const [search, setSearch] = useState('')
  useEffect(() => {
    getTask();
  }, [getTask])
  const handleSearch = (e) => setSearch(e.target.value)
  if (taskLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={taskLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }
  if (!totalTasks) {
    return <NewTaskPopup addTask={addTask} />
  }
  return (
    <div className='dashboard-container'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} className="detail_box">
          <Item>
            <Typography variant="h6" component="h6">
              Task Completed
            </Typography>
            <Typography sx={{ fontSize: "32px" }} variant="h5" component="h5">
              <span>{completedTasks}</span>/{totalTasks}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} className="detail_box">
          <Item>
            <Typography variant="h6" component="h6">
              Latest Task
            </Typography>
            <List dense>
              {tasks.map((o, k) => {
                if (k < 3) {
                  return <ListItem key={o._id}  sx={{textDecoration: o.completed ? "line-through" : "none", display: 'list-item', fontSize: "12px", fontWeight: 400 }}>{o.name}</ListItem>
                }
                return null
              })
              }
            </List>

          </Item>
        </Grid>
        <Grid item xs={12} sm={4} className="detail_box">
          <Item>
            <PieChart data={[{ title: 'Uncompleted Tasks', value: totalTasks - completedTasks, color: '#E8ECEC' }, { title: 'Completed Tasks', value: completedTasks, color: '#5285EC' },]} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12} className="filter_box">

            <Typography variant="h6" component="h6">
              Tasks
            </Typography>
            <div className="search_container">
              <TextField
                size="small"
                placeholder="Search"
                value={search} onChange={handleSearch} InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'><IconButton>
                      <SearchIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Box><NewTaskPopup hideMessage={true} addTask={addTask} /></Box>
            </div>
          </Grid>



          <Grid item xs={12}>
            <TaskList search={search} deleteTask={deleteTask} updateTask={updateTask} tasks={tasks} />
          </Grid>


        </Grid>
      </Grid>

    </div>



  )
}
