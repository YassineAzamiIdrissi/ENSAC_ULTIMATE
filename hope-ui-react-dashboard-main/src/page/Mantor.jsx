import React from 'react'
import { pageCss } from './PageCss'
import Pagebanner from '../components/Pagebanner'
import { Box, Container, Grid, Pagination, Stack } from '@mui/material'
import Mantors from '../components/Mantor';
import Navbar from '../components/Navbar';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Mantor = () => {
  const classes = pageCss();
  return (
    <Box>
      <Navbar />

      <Pagebanner
        title="Les instructeurs"
      />
      <Box className={classes.blog_section_all}>
        <Container maxWidth="lg">
          <Grid container>
            {data.map((item) => (
              <Grid item xs={12} sm={3} key={item}>
                <Mantors />
              </Grid>
            ))}

            <Box className={classes.pagination}>
              <Stack spacing={2}>
                <Pagination count={6} variant="outlined" shape="rounded" />
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Mantor
