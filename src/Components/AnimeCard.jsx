import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Navbar } from './'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useWatchList } from './context/context.jsx'
const AnimeCard = ({ anime }) => {
  const { addAnime } = useWatchList();

  return (
    <div>

      <Navbar />
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {anime.map((item) => (
          <motion.div key={item.mal_id} initial={{ opacity: 0 }}
            whileHover={{ backgroundColor: "rgb(30, 38, 53)" }}
            whileTap={{ backgroundColor: "#2f3336" }}
            whileInView={{ opacity: 1 }} >
            <Box

              sx={{
                width: {
                  xs: '140px',
                  md: '250px',
                },
                border: '1px solid #ccc',
                borderRadius: '12px',
                overflow: 'hidden',
                p: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '37rem'
              }}
            >
              <img
                src={item.images.jpg.large_image_url}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
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
                }}
              >
                {item.title}
              </p>
              <Link to={`/anime/${item.mal_id}`}><motion.button className="button" transition={{ type: "spring" }} animate={{ scale: 1.2 }} initial={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1 }}>More info</motion.button></Link>
              <motion.button className="button" onClick={() => addAnime(item)} transition={{ type: "spring" }} animate={{ scale: 1.2 }} initial={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1 }}>Add</motion.button>
            </Box>
          </motion.div>
        ))}
      </Stack>

    </div>
  )
}

export default AnimeCard
