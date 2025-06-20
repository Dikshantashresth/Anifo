// components/Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  Box,
  IconButton,
  Drawer,
  InputBase, // Assuming you intend to use MUI's InputBase for styling consistency
} from '@mui/material';
import { List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [Name, setName] = useState(''); // FIX: Initialize with an empty string
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name) {
      navigate(`/search/${Name}`);
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        bgcolor: '#0e0e10',
        height: '100%',
        color: '#fff',
        pt: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 'bold',
          fontFamily: 'Orbitron, sans-serif',
          color: '#00BFFF',
          textShadow: '0 0 6px #00BFFF',
        }}
      >
        Anifo
      </Typography>
      <List >
        <Stack >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: '#fff',
                  fontWeight: '500',
                  fontFamily: 'Poppins',
                  transition: '0.3s',
                  '&:hover': {
                    color: '#00BFFF',
                    textShadow: '0 0 8px #00BFFF',
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link to={`/trending`} style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: '#fff',
                  fontWeight: '500',
                  fontFamily: 'Poppins',
                  transition: '0.3s',
                  '&:hover': {
                    color: '#00BFFF',
                    textShadow: '0 0 8px #00BFFF',
                  },
                }}
              >
                Trending
              </Button>
            </Link>
            <Link to={`/mylist`} style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: '#fff',
                  fontWeight: '500',
                  fontFamily: 'Poppins',
                  transition: '0.3s',
                  '&:hover': {
                    color: '#00BFFF',
                    textShadow: '0 0 8px #00BFFF',
                  },
                }}
              >
                MyList
              </Button>
            </Link>
          </motion.div> </Stack>
      </List>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 3,
          mx: 2,
          bgcolor: '#1a1a1d',
          borderRadius: '8px',
          px: 2,
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 0 8px #00BFFF40',
          border: '1px solid #00BFFF30',
        }}
      >
        {/* Use InputBase here as well for consistency */}
        <InputBase
          placeholder="Search..."
          sx={{
            ml: 1,
            flex: 1,
            color: '#fff',
            fontFamily: 'Poppins',
            '& input::placeholder': {
              color: '#aaa',
            },
          }}
          value={Name}
          onChange={handleChange}
        />
        <IconButton type="submit" sx={{ p: '10px', color: '#00BFFF' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: '#0e0e10',
          marginBottom: '10px',
          px: 2,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Orbitron, sans-serif',
              color: '#00BFFF',
              textShadow: '0 0 6px #00BFFF',
              cursor: 'pointer',
              mr: 2,
            }}
          >
            Anifo
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={3} alignItems="center">

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}

              >
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: '#fff',
                      fontWeight: '500',
                      fontFamily: 'Poppins',
                      transition: '0.3s',
                      '&:hover': {
                        color: '#00BFFF',
                        textShadow: '0 0 8px #00BFFF',
                      },
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link to={`/trending`} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: '#fff',
                      fontWeight: '500',
                      fontFamily: 'Poppins',
                      transition: '0.3s',
                      '&:hover': {
                        color: '#00BFFF',
                        textShadow: '0 0 8px #00BFFF',
                      },
                    }}
                  >
                    Trending
                  </Button>
                </Link>
                <Link to={`/mylist`} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: '#fff',
                      fontWeight: '500',
                      fontFamily: 'Poppins',
                      transition: '0.3s',
                      '&:hover': {
                        color: '#00BFFF',
                        textShadow: '0 0 8px #00BFFF',
                      },
                    }}
                  >
                    MyList
                  </Button>
                </Link>
              </motion.div>


              <Box
                component="form" // Change to form for consistent submission behavior
                onSubmit={handleSubmit}
                sx={{
                  bgcolor: '#1a1a1d',
                  borderRadius: '8px',
                  px: 2,
                  py: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 0 8px #00BFFF40',
                  border: '1px solid #00BFFF30',
                  ml: 2,
                }}
              >
                {/* Use InputBase here as well for consistency */}
                <InputBase
                  placeholder="Search..."
                  sx={{
                    ml: 1,
                    flex: 1,
                    color: '#fff',
                    fontFamily: 'Poppins',
                    '& input::placeholder': {
                      color: '#aaa',
                    },
                  }}
                  value={Name}
                  onChange={handleChange}
                />
                <IconButton type="submit" sx={{ p: '10px', color: '#00BFFF' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#0e0e10' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </motion.div>
  );
};

export default Navbar;