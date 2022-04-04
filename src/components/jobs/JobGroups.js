import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import JobItem from './JobItem'
import { searchJobs } from './JobSearch'

function JobGroups({ jobs, selectedLocation, selectedTeam, selectedWorkType }) {

    const [filteredJobs, setFilteredJobs] = useState([])

    useEffect(() => {

        let jobsFound = searchJobs(jobs, selectedLocation, selectedTeam, selectedWorkType)

        setFilteredJobs(jobsFound)

    }, [jobs, selectedLocation, selectedTeam, selectedWorkType])

    const getTeams = () => {
        let allTeams = new Set(filteredJobs.map(job => job.categories.team))
        return [...allTeams]
    }
    
  return (
      <>
        {getTeams().map(team => (
            <Box key={team} marginTop='5rem'>
                <Typography marginBottom='4rem' color='primary' fontWeight='bold' textTransform="uppercase" letterSpacing='2px' variant="body1" marginTop={5}>
                    {team}
                </Typography>
                <JobItem jobs={filteredJobs} teamName={team} />
            </Box>
        ))}
      </>
  )
}

export default JobGroups