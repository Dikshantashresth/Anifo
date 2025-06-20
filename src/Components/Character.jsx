import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetch } from '../utils/fetch';
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import Loader from './Loader';

const Character = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async (animeId) => {
      try {
        const res = await fetch(`anime/${animeId}/characters`);
        setCharacters(res.data || []);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      }
    };
    getCharacters(id);
  }, [id]);

  if (!characters.length) {
    return <Loader style={{ marginTop: '30px' }} />;
  }

  return (
    <Box sx={{ mt: 4, px: { xs: 2, md: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Characters
        </Typography>
      </motion.div>

      <Stack justifyContent='center' flexDirection='row' flexWrap='wrap' gap={3}>
        {characters.map((char, index) => (
          <Stack justifyContent='center' key={char.character.mal_id} sx={{ maxWidth: '300px', width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
                <CardMedia
                  component="img"
                  image={char.character.images.jpg.image_url}
                  alt={char.character.name}
                  sx={{ height: '400px', width: '300px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {char.character.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Role: {char.role}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Character;
