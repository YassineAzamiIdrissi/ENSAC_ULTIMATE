import React from 'react'
import { pageCss } from './PageCss'
import Pagebanner from '../components/Pagebanner'
import { Box, Container, Grid, Pagination, Stack } from '@mui/material'
import Blogs from '../components/Blog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Blog = () => {
  const classes = pageCss();
  return (
    <Box>
      <Navbar />

      <Pagebanner
        title="Blog"
      />
      <Box className={classes.blog_section_all}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid item xs={12} sm={4} key={item}>
                <Blogs />
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

      <Footer />
    </Box>
  )
}

export default Blog
