import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const MotionButton = motion.button;

const Bar = () => {
  const { id } = useParams();

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none',
  };

  const hoverEffect = {
    scale: 1.1,
    backgroundColor: '#1565c0',
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <Stack
      direction={{ xs: 'row', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ mt: 3, flexWrap: { xs: 'nowrap', md: 'wrap' } }}
    >
      <Link to={`/anime/${id}`}>
        <MotionButton
          style={buttonStyle}
          whileHover={hoverEffect}
          whileTap={{ scale: 0.95 }}
        >
          Overview
        </MotionButton>
      </Link>
      <Link to={`/anime/${id}/characters`}>
        <MotionButton
          style={buttonStyle}
          whileHover={hoverEffect}
          whileTap={{ scale: 0.95 }}
        >
          Characters
        </MotionButton>
      </Link>
      <Link to={`/anime/${id}/producers`}>
        <MotionButton
          style={buttonStyle}
          whileHover={hoverEffect}
          whileTap={{ scale: 0.95 }}
        >
          Producers
        </MotionButton>
      </Link>
    </Stack>
  );
};

export default Bar;
