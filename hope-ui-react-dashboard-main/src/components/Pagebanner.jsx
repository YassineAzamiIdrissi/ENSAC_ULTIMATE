import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { comCss } from './ComponentsCss'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Pagebanner = (props) => {
    const { title, subtitle, course_time, course_enroll, course_rating, course_expart, className } = props;
    const classes = comCss();
    return (
        <Box className={`${className} || ${classes.page_banner}`}>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2" className={classes.page_title}>
                    {title}
                </Typography>
                {subtitle ?
                    <Typography variant="h3" component="h3" className={classes.page_subtitle}>
                        {subtitle}
                    </Typography>
                    : ""}
                <Box className={classes.page_meta}>
                    {course_time ?
                        <span className={classes.page_banner_icon}>
                            <AccessTimeOutlinedIcon />
                            {course_time}
                        </span>
                        : ""}

                    {course_enroll ?
                        <span className={classes.page_banner_icon}>
                            <PersonOutlineOutlinedIcon className={`${classes.page_banner_icon}`} />
                            {course_enroll}
                        </span>
                        : ""}

                    {course_rating ?
                        <span className={classes.page_banner_rating_icon}>
                            <StarOutlinedIcon className={`${classes.page_banner_icon}`} />
                            <StarOutlinedIcon className={`${classes.page_banner_icon}`} />
                            <StarOutlinedIcon className={`${classes.page_banner_icon}`} />
                            <StarOutlinedIcon className={`${classes.page_banner_icon}`} />
                            <StarHalfOutlinedIcon className={`${classes.page_banner_icon}`} />
                            <p style={{ color: "#FFAA46", padding: "0px 5px 0px 5px" }}>
                                4.5
                            </p>
                            <span>({course_rating})</span>
                        </span>
                        : ""}

                    {course_expart ?
                        <span className={classes.page_banner_icon}>
                            <SignalCellularAltOutlinedIcon className={`${classes.page_banner_icon}`} />
                            {course_expart}
                        </span>
                        : ""}

                </Box>
            </Container>
        </Box>
    )
}

export default Pagebanner
