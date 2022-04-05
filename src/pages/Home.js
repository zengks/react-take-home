import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";

import Header from "../components/layout/Header"
import Banner from "../components/layout/Banner";
import Filter from "../components/layout/Filter";
import LoadingSpinner from "../components/layout/LoadingSpinner";

const LEVER_URL = process.env.REACT_APP_LEVER_URL;

function Home() {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  // media query for medium screen
  const widthMatch = useMediaQuery('(max-width: 850px)')

  useEffect(() => {
    setLoading(true)
    // Retrieve job data through lever api url
    const getJobs = async () => {
        await axios.get(LEVER_URL)
            .then(res => {
                setJobs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setTimeout(() => {
          setLoading(false)    
        }, 300);
    }
    getJobs()
  }, [])

  let boxStyle

  if(widthMatch) {
    boxStyle = {margin: 0}
  } else {
    boxStyle = {margin: '0 5rem'}
  }

  if(loading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
          <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
            Open Positions
          </Typography>
          <Typography
            sx={{ textAlign: "center", maxWidth: "768px", margin: "2rem auto" }}
          >
            Our data is training and testing autonomous systems at companies around
            the world. We're looking for talented visionaries to help us to expand
            our impact on the way artificial intelligence is developed.
          </Typography>
        </Box>

        <Box sx={boxStyle}>
          <Filter jobs={jobs} />
        </Box>
        
      </Container>
    </>
  );
}

export default Home;
