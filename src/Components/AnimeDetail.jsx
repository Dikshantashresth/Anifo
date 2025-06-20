import React, { useEffect, useState } from 'react';
import { fetch } from '../utils/fetch';
import { useParams, Outlet } from 'react-router-dom';
import {
  Card,
  Box,
  Stack,
  Typography,
  Container,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import Bar from './Bar';
import Navbar from './Navbar';
import Loader from './Loader';
const AnimeDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const res = await fetch(`anime/${id}`);
      setDetails(res.data);
      console.log(res.data)
    };
    getDetail();


  }, [id]);

  if (!details) return <Loader />;

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="flex-start"


        >
          {/* Left: Anime Image */}
          <Box sx={{ width: { xs: '160px', md: '300px' } }}>
            <img
              src={details?.images?.jpg?.large_image_url}
              alt={details.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Right: Details */}
          <Box flex={1}>
            <Typography variant="h4" fontWeight="bold">
              {details.title}
            </Typography>
            <Typography variant="h6" color="white">
              English: {details.title_english || 'N/A'}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" sx={{ mb: 2 }}>
              {details.synopsis || 'No description available.'}
            </Typography>


            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
              <Card sx={{ p: 2, minWidth: 100, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
                <Typography variant="subtitle2" color="white">
                  Score
                </Typography>
                <Typography variant="h6">{details.score || 'N/A'}</Typography>
              </Card>
              <Card sx={{ p: 2, minWidth: 100, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
                <Typography variant="subtitle2" color="white">
                  Status
                </Typography>
                <Typography variant="h6">{details.status || 'N/A'}</Typography>
              </Card>
              <Card sx={{ p: 2, minWidth: 100, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
                <Typography variant="subtitle2" color="white">
                  Episodes
                </Typography>
                <Typography variant="h6">{details.episodes || 'N/A'}</Typography>
              </Card>
              <Card sx={{ p: 2, minWidth: 100, textAlign: 'center', backgroundColor: '#1976d2', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle3" color="white">
                  Genre
                </Typography>
                {details.genres.map((genre) => (
                  <Typography variant="h6">{genre.name || 'N/A'}</Typography>
                ))}

              </Card>
            </Stack>



          </Box>

        </Stack>
        <Bar details={details} />
        <Outlet context={details} />
      </Container >
    </motion.div >
  );
};

export default AnimeDetail;
