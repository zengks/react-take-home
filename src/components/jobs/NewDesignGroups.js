import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import JobItem from './JobItem'
import { searchJobs } from './JobSearch'

function JobGroups({ jobs, selectedLocation, selectedTeam, selectedWorkType }) {

    const [filteredJobs, setFilteredJobs] = useState([])

    const widthMatch = useMediaQuery('(max-width: 900px)')

    useEffect(() => {

        let jobsFound = searchJobs(jobs, selectedLocation, selectedTeam, selectedWorkType)

        setFilteredJobs(jobsFound)

    }, [jobs, selectedLocation, selectedTeam, selectedWorkType])

    const getTeams = () => {
        let allTeams = new Set(filteredJobs.map(job => job.categories.team))
        return [...allTeams]
    }

    let boxStyle

    if(widthMatch) {
        boxStyle = {
            marginBottom: '4rem',
            borderLeft: 'none',
        }
    }else {
        boxStyle = {
            borderLeft: '1px solid #81929e',
            paddingLeft: '1.5rem',
            marginBottom: '4rem'
        }
    }
    
  return (
      <>
        {getTeams().map(team => (
            <Box key={team} sx={boxStyle}>
                <Typography marginBottom='4rem' color='primary' fontWeight='bold' textTransform="uppercase" letterSpacing='2px' variant="body1">
                    {team}
                </Typography>
                <JobItem jobs={filteredJobs} teamName={team} />
            </Box>
        ))}
      </>
  )
}

export default JobGroups