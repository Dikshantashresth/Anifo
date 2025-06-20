import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Box, Typography, Stack, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const Producers = () => {
  const details = useOutletContext();

  if (!details || !details.producers) {
    return <Typography>Loading producers...</Typography>;
  }

  return (
    <Box sx={{ mt: 4, px: { xs: 2, md: 4 } }}>
      {/* Animated heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Producers
        </Typography>
      </motion.div>


      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 3, sm: 4 }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {details.producers.map((producer) => (
          <motion.div
            key={producer.mal_id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2 }}
            style={{
              flex: '0 1 150px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '10px'
            }}
          >
            <Avatar
              src={producer.url}
              alt={producer.name}
              sx={{
                width: 120,
                height: 120,
                mb: 1,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
              variant="rounded"
            />
            <Typography variant="subtitle1" fontWeight="600">
              {producer.name}
            </Typography>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default Producers;
