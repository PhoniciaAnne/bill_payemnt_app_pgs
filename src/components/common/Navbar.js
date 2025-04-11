import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="font-bold">
         Bill App
        </Typography>

        <Box className="flex items-center space-x-4">
          {user && (
            <>
              <Typography>{user.name} ({user.role})</Typography>
              <IconButton color="inherit" onClick={logout}>
                <FiLogOut size={20} />
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
