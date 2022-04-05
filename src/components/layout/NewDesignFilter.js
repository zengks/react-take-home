import { Typography, MenuItem, FormControl, Select, Box, useMediaQuery, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import NewDesignGroups from '../jobs/NewDesignGroups'

function Filter({ jobs }) {

    const [allLocations, setAllLocations] = useState([])
    const [allTeams, setAllTeams] = useState([])
    const [allWorkTypes, setAllWorkTypes] = useState([])

    const [selectedLocation, setSelectedLocation] = useState('ALL LOCATIONS')
    const [selectedTeam, setSelectedTeam] = useState('ALL TEAMS')
    const [selectedWorkType, setSelectedWorkType] = useState('ALL WORK TYPES')

    const widthMatch = useMediaQuery('(max-width: 900px)')

    useEffect(() => {
        addFilterInfo(jobs)
    }, [jobs])
    
    // add dynamic info to select filters
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

    let boxStyle
    let filterStyle
    let typoStyle

    if(!widthMatch) {
        boxStyle = {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '1rem',
        }
        filterStyle = {
            margin: '.5rem 0',
            border: '1px solid #81929e',
            borderRadius: '5px'
        }
    }else {
        boxStyle = {
            display: 'block',
            marginBottom: '2rem',
        }
        typoStyle = {
            margin: '.5rem 0'
        }
        filterStyle = {
            width: '100%',
            margin: '.7rem 0',
            border: '1px solid #81929e',
            borderRadius: '5px'
        }
    }

  return (
      <>
        <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
                <Box sx={boxStyle}>
                <Typography sx={typoStyle} textTransform="uppercase" variant="body2">filter by: </Typography>
            
                <FormControl sx={filterStyle}>
                    <Select
                        autoWidth
                        labelId='select-location'
                        id='selectLocation'
                        value={selectedLocation}
                        onChange={handleLocationChange}
                    >
                        <MenuItem value="ALL LOCATIONS">ALL LOCATIONS</MenuItem>
                        {allLocations.map((loc, index) => (
                            <MenuItem key={index} value={loc}>{loc}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={filterStyle}>
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

                <FormControl sx={filterStyle}>
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
                </Box>
            </Grid>

            <Grid item md={9} xs={12}>
                <NewDesignGroups
                    jobs={jobs}
                    selectedLocation={selectedLocation}
                    selectedTeam={selectedTeam}
                    selectedWorkType={selectedWorkType}
                />
            </Grid>
        </Grid>
      </>
  )
}

export default Filter