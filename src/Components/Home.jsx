import React, { useEffect, useState } from 'react';
import { fetch } from '../utils/fetch'; // path to your utils file
import { Box, Stack, Button, Typography } from '@mui/material';
import { Navbar } from './';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Loader from './Loader';
import AnimeCard from './AnimeCard';
import { div } from 'motion/react-client';
import { useWatchList } from './context/context';
const Home = () => {
  const [Anime, setAnime] = useState([]);
  const navigate = useNavigate();
  const [Page, setPage] = useState(1);
  const MotionButton = motion(Button);
  const { watchList } = useWatchList();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`seasons/now?page=${Page}`);
        console.log(response)
        setAnime(response.data); // because the Jikan API wraps it in .data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
    console.log(watchList)

  }, [Page, watchList]);
  if (!Anime || Anime.length === 0) return <Loader />
  return (
    <>
      <AnimeCard anime={Anime} />

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={4}
        mb={2}
      >
        <MotionButton
          variant="contained"
          color="primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(prev => Math.max(1, prev - 1))}
        >
          Prev
        </MotionButton>

        <Typography variant="body1" fontWeight="bold">
          Page {Page}
        </Typography>

        <MotionButton
          variant="contained"
          color="primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setPage(prev => prev + 1)
          }}
        >
          Next
        </MotionButton>
      </Stack>
    </>
  );
};

export default Home;
