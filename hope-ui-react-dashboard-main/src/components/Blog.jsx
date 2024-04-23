import React from 'react'
import { pageCss } from '../page/PageCss'
import { Box, Typography } from '@mui/material'
import imgblog from "../image/course-react.jpg"
import { Link } from 'react-router-dom'

const Blog = () => {
  const classes = pageCss();
  return (
    <Box className={classes.blog_section_box}>
      <Box className={classes.blog_section_box_thumbnail}>
        <Link to="/blog/1">
          <img src={imgblog} alt="img" className={classes.blog_thumbnail} />
        </Link>
      </Box>
      <Typography variant="h4" component="h4" className={classes.blog_category}>
        Courses
      </Typography>
      <Typography variant="h2" component="h2" className={classes.blog_title}>
        <Link to="/blog/1">What is machine learning and how does it work?</Link>
      </Typography>
      <Typography variant="h4" component="p" className={classes.blog_des}>
        Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum...
      </Typography>
    </Box>
  )
}

export default Blog
