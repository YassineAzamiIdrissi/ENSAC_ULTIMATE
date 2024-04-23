import { Box, Typography } from '@mui/material'
import React from 'react'
import { comCss } from './ComponentsCss'
import avatar from "../image/avatar-1-100x100.jpg"


const TextimonialCom = () => {
    const classes = comCss();
    return (
        <Box className={classes.testimonial}>
            <Box className={classes.testimonial_description_section}>
                <Box className={classes.testimonial_icon}>
                    <i className="fa-sharp fa-solid fa-quote-left"></i>
                </Box>
                <Typography variant="h4" component="p" className={classes.testimonial_des}>
                    The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.
                </Typography>
            </Box>
            <Box className={classes.testimonial_name_section}>
                <img src={avatar} alt="avatar" className={classes.testimonial_img} />
                <Typography variant="h4" component="h4" className={classes.testimonial_title}>
                    Nazmul Hossen
                </Typography>
                <Typography variant="h5" component="p" className={classes.testimonial_subtitle}>
                    Web Developer
                </Typography>
            </Box>
        </Box>
    )
}

export default TextimonialCom

