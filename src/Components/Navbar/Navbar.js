import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../../Assets/Images/logo.svg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffffff',padding:'0.3% 15%' }}>
      <Toolbar sx={{ paddingLeft: isMobile ? '16px' : '300px', paddingRight: isMobile ? '16px' : '300px' }}>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img style={{width:'3vw'}} src={logo} alt="Company Logo" />
          <img style={{width:'10vw'}} src='https://www.123opzeggen.nl/img/common/logo/logo-text-only.svg' alt="Company Logo" />
        </Typography>

       
        {!isMobile && (
          <TextField
            variant="outlined"
            placeholder="Company Name"
            sx={{ marginRight: '16px', color: 'blue' }}
          />
        )}

        {!isMobile && (<SearchOutlinedIcon style={{color:'#20B6DF'}}/>)}

        {isMobile ? (
          <Button to="/categories" variant="text" sx={{ marginRight: '8px' }}>
            Categories
          </Button>
        ) : (
          <Button to="/categories" variant="text" sx={{ marginRight: '8px' }}>
            Categories
          </Button>
        )}
        <Button to="/contact" variant="text">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;