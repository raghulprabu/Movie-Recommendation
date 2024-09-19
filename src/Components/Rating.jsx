import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export const Rating = (props) => {
    const { rating } = props; 
    const progress = (rating / 5) * 100; 
    console.log(rating,'rating')

    return (
        <Box
            sx={{
                backgroundColor:'white',
                borderRadius:'50%',
                position: 'relative',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress
                variant="determinate"
                value={progress}
                size={60}
                thickness={4}
                sx={{
                    color:
                      rating >= 4.0
                        ? '#28cd41' 
                        : rating >= 3.5
                        ? '#ff9500' 
                        : rating >= 2.5
                        ? '#FF6347'
                        : '#ff3b30', // Default case
                  }}
                  
            >
                <Typography>{progress}</Typography>
            </CircularProgress>

            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography 
                    variant="h5" 
                    component="div" 
                    color="textPrimary"
                >
                    {rating?.toFixed(1)} 
                </Typography> 
            </Box>
        </Box>
    );
};

export default Rating;
