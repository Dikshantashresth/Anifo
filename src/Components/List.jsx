import React, { useEffect } from 'react';
import { useWatchList } from './context/context';
import { Box, Paper, Typography, IconButton, Stack } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const List = () => {
  const { watchList, setwatchList } = useWatchList();


  const handleRemove = (index) => {
    setwatchList(prev => prev.filter((_, i) => i !== index));
  };
  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: '800px', margin: 'auto', mt: 5, p: 2 }}>

        <Typography variant="h4" textAlign="center" mb={3}>
          🎥 My Anime Watchlist
        </Typography>

        {watchList.length === 0 ? (
          <Typography textAlign="center">No anime added yet. 😢</Typography>
        ) : (
          <Stack spacing={2}>
            {watchList.map((anime, index) => (
              <motion.div
                key={anime.mal_id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#1c1c1c',
                    color: '#fff',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img
                      src={anime.images.jpg.image_url || anime.images.jpg.large_image_url}
                      alt={anime.title}
                      style={{ width: '60px', height: '80px', borderRadius: '8px' }}
                    />
                    <Box>
                      <Typography variant="subtitle1">{anime.title}</Typography>
                      <Link to={`/anime/${anime.mal_id}`}><motion.button className="button" transition={{ type: "spring" }} animate={{ scale: 1.2 }} initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        whileInView={{ opacity: 1 }}>More info</motion.button></Link>
                    </Box>
                  </Box>

                  <IconButton onClick={() => handleRemove(index)} color="error">
                    <Delete />
                  </IconButton>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default List;
