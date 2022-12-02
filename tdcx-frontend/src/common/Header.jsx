import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { forceLogout } from '../module/user/login/action';

export default function Header() {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  const name = useSelector((state) =>
    get(state, 'user.firstname', false)
  );


  const handleLogout = () => {
    dispatch(forceLogout())
    navigate('/login')

  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="nav_header">
        <Toolbar>
          <div className="profile_box">
            <div className="profile_img"></div>
            <h5>
            {name || ''}
          </h5>
          </div>
          {/* <Button color="inherit">Login</Button> */}
          <h5 className="logout" onClick={handleLogout}>Logout</h5>

        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
