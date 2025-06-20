import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { fetch } from '../utils/fetch';
import { useWatchList } from './context/context';
const Searchfeed = () => {
  const { name } = useParams();
  const { addAnime } = useWatchList();
  const [Searchanime, setSearchAnime] = useState([]);

  useEffect(() => {
    const getAnime = async (query) => {
      try {
        const res = await fetch(`anime?q=${query}`);
        console.log(res);
        setSearchAnime(res.data || []);
      } catch (error) {
        console.error('Failed to fetch anime:', error);
      }
    };
    getAnime(name);
  }, [name]);

  return (
    <div>
      <Box >
        <Navbar />
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
          {Searchanime.map((item) => (
            <motion.div
              key={item.mal_id}
              initial={{ opacity: 0 }}
              whileHover={{ backgroundColor: 'rgb(30, 38, 53)' }}
              whileTap={{ backgroundColor: '#2f3336' }}
              whileInView={{ opacity: 1 }}
            >
              <Box
                sx={{
                  width: { xs: '140px', md: '250px' },
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  p: 1,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '33rem',
                  bgcolor: '#1c1c1e',
                }}
              >
                <img
                  src={item.images.jpg.large_image_url}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '50rem',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '14px',
                    textAlign: 'center',
                    height: '3rem',
                    overflow: 'hidden',
                    color: '#fff',
                  }}
                >
                  {item.title}
                </p>
                <Link to={`/anime/${item.mal_id}`} style={{ textDecoration: 'none' }}>
                  <motion.button
                    className="button"
                    transition={{ type: 'spring' }}
                    animate={{ scale: 1.2 }}
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    whileInView={{ opacity: 1 }}

                  >
                    More Info
                  </motion.button>
                </Link>
                <motion.button className="button" onClick={() => addAnime(item)} transition={{ type: "spring" }} animate={{ scale: 1.2 }} initial={{ opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  whileInView={{ opacity: 1 }}>Add</motion.button>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Searchfeed;
