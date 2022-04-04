import { Typography, MenuItem, FormControl, Select, Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import JobGroups from '../jobs/JobGroups'
import theme from '../../theme/mui'

function Filter({jobs}) {

    const [allLocations, setAllLocations] = useState([])
    const [allTeams, setAllTeams] = useState([])
    const [allWorkTypes, setAllWorkTypes] = useState([])

    const [selectedLocation, setSelectedLocation] = useState('ALL LOCATIONS')
    const [selectedTeam, setSelectedTeam] = useState('ALL TEAMS')
    const [selectedWorkType, setSelectedWorkType] = useState('ALL WORK TYPES')

    useEffect(() => {
        addFilterInfo(jobs)
    }, [jobs])
    
    const addFilterInfo = (jobs) => {
        let locs = []
        let teams = []
        let types = []

        jobs.forEach(job => {
            locs.push(job.categories.location)
            teams.push(job.categories.team)
            if(job.categories.commitment !== undefined) {
                types.push(job.categories.commitment)
            }
        })

        setAllLocations([...new Set(locs)])
        setAllTeams([...new Set(teams)])
        setAllWorkTypes([...new Set(types)])

    }

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value)
    }

    const handleTeamChange = (e) => {
        setSelectedTeam(e.target.value)
    }

    const handleWorkTypeChange = (e) => {
        setSelectedWorkType(e.target.value)
    }
  
  return (
      <>
        <Box >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={1.5}>
                    <Typography sx={{  lineHeight: "2.7rem", marginLeft: "1rem" }}textTransform="uppercase" variant="body2" component="h2">filter by: </Typography>
                </Grid>
                    
                <Grid item xs={12} sm={2}>
                    <FormControl sx={{ width: "95%", marginLeft: "1rem" }} variant="outlined" color='secondary'>
                        <Select
                            autoWidth
                            labelId='select-location'
                            id='selectLocation'
                            value={selectedLocation}
                            onChange={handleLocationChange}
                        >
                            <MenuItem  value="ALL LOCATIONS">ALL LOCATIONS</MenuItem>
                            {allLocations.map((loc, index) => (
                                <MenuItem key={index} value={loc}>{loc}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <FormControl sx={{  width: '95%', marginLeft: "1rem" }} variant="outlined" color='secondary'>
                        <Select
                            autoWidth
                            labelId='select-team'
                            id='selectTeam'
                            value={selectedTeam}
                            onChange={handleTeamChange}
                        >
                            <MenuItem value="ALL TEAMS">ALL TEAMS</MenuItem>
                            {allTeams.map((team, index) => (
                                <MenuItem key={index} value={team}>{team}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={2.5} >
                    <FormControl sx={{  width: '95%', marginLeft: "1rem" }} variant="outlined" color='secondary'>
                        <Select
                            autoWidth
                            labelId='select-work-type'
                            id='selectWorkType'
                            value={selectedWorkType}
                            onChange={handleWorkTypeChange}
                        >
                            <MenuItem value="ALL WORK TYPES">ALL WORK TYPES</MenuItem>
                            {allWorkTypes.map((type, index) => (
                                <MenuItem key={index} value={type}>{type}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                
            </Grid>
        </Box>

        <Box sx={{margin: "6rem 0rem"}}>
            <JobGroups 
                jobs={jobs}
                selectedLocation={selectedLocation}
                selectedTeam={selectedTeam}
                selectedWorkType={selectedWorkType}
            />
        </Box>

      </>
    
  )
}

export default Filter