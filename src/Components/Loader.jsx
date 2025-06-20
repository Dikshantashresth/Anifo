import React from 'react'
import { CircularProgress, Box } from '@mui/material'
const Loader = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
        <CircularProgress color="#1565c0" />
      </Box>

    </div>
  )
}

export default Loader
