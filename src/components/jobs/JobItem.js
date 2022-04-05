import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function JobItem({ jobs, teamName }) {

  const widthMatch = useMediaQuery('(max-width: 770px)')

  let boxStyle
  let btnStyle

  if(widthMatch) {
    boxStyle = {
      marginBottom: '2rem',
      borderBottom: 1,
      display: 'block',      
    }
    btnStyle = {
      marginY: '2.5rem',
    }
  } else {
    boxStyle = {
      marginBottom: '2rem',
      borderBottom: 1,
      display: 'flex',
      justifyContent: 'space-between',
    }
    btnStyle = {
      marginY: '2rem',
    }
  }

  return (
    <>
      {jobs.map(job => (
        <div key={job.id}>
          {job.categories.team === teamName && (
            <Box
              sx={boxStyle}
            >
                <div>
                  <Typography variant='h3' letterSpacing='1px' marginBottom={1}>{job.text}</Typography>
                  
                  <Typography variant='h6' textTransform='uppercase' sx={{marginBottom: '0rem', marginTop: '1rem'}}>
                    {job.categories.location} / {job.categories.team}
                  </Typography>
                </div>
                
                <Button sx={btnStyle} variant="outlined" href={job.applyUrl} target="_blank">Apply</Button>              
            </Box>
          )}
        </div>
      ))}
    </>
  )
}

export default JobItem