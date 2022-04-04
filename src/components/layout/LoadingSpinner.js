import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function LoadingSpinner() {
  return (
    <>
        <Box>
            <CircularProgress sx={{ position:'absolute', top: '40%', left: '48%', transform: 'translate(-50%, -50%)' }} size="5rem" />
        </Box>
    </>
  )
}

export default LoadingSpinner