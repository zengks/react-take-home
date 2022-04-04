import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function JobItem({ jobs, teamName, locationSet, workTypeSet }) {

  return (
    <>
      {jobs.map(job => (
        <div key={job.id}>
          {job.categories.team === teamName && (
            <Box
              sx={{
                marginBottom: '2rem',
                borderBottom: 1, 
                display: "flex", 
                justifyContent: "space-between" }} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <Typography variant='h3' letterSpacing='1px' marginBottom={1}>{job.text}</Typography>
                  <Typography variant='h6' textTransform='uppercase' sx={{marginBottom: '0rem', marginTop: '1rem'}}>
                    {job.categories.location} / {job.categories.team}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button sx={{marginY: '2rem'}} variant="outlined" href={job.applyUrl}>Apply</Button>
                </Grid>
              </Grid>
              
              
            </Box>
          )}
        </div>
      ))}
    </>
  )
}

export default JobItem