import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Box, Typography, Stack, Chip } from '@mui/material';

const Overview = () => {
    const details = useOutletContext();

    if (!details) return <p>Loading...</p>;

    return (
        <Box sx={{ mt: 4, }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Overview
            </Typography>



            <Stack direction="row" spacing={1} sx={{ color: 'white', mb: 2, flexWrap: 'wrap', justifyContent: { xs: 'flex-start' } }}>
                <Chip
                    label={`Season: ${details.seasons || 'N/A'}`}
                    sx={{
                        border: '1px solid #1976d2',
                        color: '#1976d2',
                        backgroundColor: '#e3f2fd',
                        fontWeight: '600',
                        marginBottom: '10px',

                    }} />
                <Chip
                    label={`Rating: ${details.rating || 'N/A'}`}
                    sx={{
                        border: '1px solid #1976d2',
                        color: '#1976d2',
                        backgroundColor: '#e3f2fd',
                        fontWeight: '600',
                        mb: 1,
                    }} />
                <Chip
                    label={`Type: ${details.type || 'N/A'}`}
                    sx={{
                        border: '1px solid #1976d2',
                        color: '#1976d2',
                        backgroundColor: '#e3f2fd',
                        fontWeight: '600',
                        mb: 1,
                    }} />
                <Chip
                    label={`Episodes: ${details.episodes || 'N/A'}`}
                    sx={{
                        border: '1px solid #1976d2',
                        color: '#1976d2',
                        backgroundColor: '#e3f2fd',
                        fontWeight: '600',
                        mb: 1,
                    }} />
                <Chip
                    label={`Status: ${details.status || 'N/A'}`}
                    sx={{
                        border: '1px solid #1976d2',
                        color: '#1976d2',
                        backgroundColor: '#e3f2fd',
                        fontWeight: '600',
                        mb: 1,
                    }} />
                <Chip
                    label={`Score: ${details.score || 'N/A'}`}
                    sx={{
                        border: '1px solid #1976d2',
                        color: '#1976d2',
                        backgroundColor: '#e3f2fd',
                        fontWeight: '600',
                        mb: 1,
                    }} />
            </Stack>
        </Box>
    );
};

export default Overview;
