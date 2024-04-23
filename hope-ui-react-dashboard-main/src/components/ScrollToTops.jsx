import { Box } from '@mui/material';
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { comCss } from './ComponentsCss'

const ScrollToTops = () => {
    const classes = comCss();
  return (
    <Box>
      <ScrollToTop smooth top="1000" component={<ArrowUpwardIcon />} className={classes.scroll_to_top} />
    </Box>
  )
}

export default ScrollToTops
