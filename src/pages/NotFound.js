import React from 'react'
import { Container, Box, Typography, Link } from '@mui/material'
import Header from '../components/layout/Header'

function NotFound() {
  return (
      <>
        <Header />
        <Container>
            <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
                <Typography variant="h1" sx={{ textAlign: "center", mb: 2 }} fontSize="4rem" color="primary">
                    404
                </Typography>
                <Typography
                    sx={{ textAlign: "center", maxWidth: "768px", margin: "1rem auto" }}
                >
                    Oops, we can't find the page you're looking for.
                </Typography>
                <Typography
                    sx={{ textAlign: "center", maxWidth: "768px", margin: "0 auto" }}
                >
                    Return {<Link href='/'>home</Link>}
                </Typography>
            </Box>
        </Container>
      </>
    
  )
}

export default NotFound