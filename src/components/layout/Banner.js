import React from 'react'
import { Box, Typography } from '@mui/material';

import bannerImage from '../../images/banner.jpeg'
import '../styles/banner.css';

function Banner() {
  return (
      <>
        <Box sx={{ position: "relative" }} marginBottom={4}>
            <img
                className='banner-img'
                src={bannerImage}
                alt="parallel domain banner"
                height={190}
            />
            <Typography
                sx={{ position: "absolute" }}
                variant="h1"
                className='banner-text'
            >
                Join Us
            </Typography>
        </Box>
      </>
  )
}

export default Banner