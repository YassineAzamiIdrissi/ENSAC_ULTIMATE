
import React from 'react'
import Pagebanner from '../components/Pagebanner'
import { pageCss } from './PageCss'
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react'


const AdmissionForm = () => {
    const classes = pageCss();

    const inialValue = {
        fullname: "",
        email: "",
        mobile: "",
        gender: "",
        dathofbarth: "",
        img: "",
        occoupation: "",
        coursename: "",
    }

    const [formValues, setFormValues] = useState(inialValue);

    const FormeSubmit = (e) => {
        e.preventDefault();
    }

    const FormInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const dateLimit = new Date();
    dateLimit.setFullYear(dateLimit.getFullYear() - 22);

    return (
        <>
            <Pagebanner
                title="Admission Now"
            />
            <Box className={classes.admission_form}>
                <Container maxWidth="lg">
                    <Box className={classes.form_box}>
                        <Typography
                            variant="h3"
                            className={classes.form_title}
                        >
                            Admission Form
                        </Typography>

                        <form onSubmit={FormeSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        id="fullname"
                                        name="fullname"
                                        label="Full Name"
                                        type="text"
                                        fullWidth={true}
                                        value={formValues.fullname}
                                        onChange={FormInputChange}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        id="fullname"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        fullWidth={true}
                                        value={formValues.email}
                                        onChange={FormInputChange}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        id="mobile"
                                        name="mobile"
                                        label="Mobile"
                                        type="text"
                                        fullWidth={true}
                                        value={formValues.mobile}
                                        onChange={FormInputChange}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <FormControl>
                                        <FormLabel className={classes.form_Radiotitle}>Gender</FormLabel>
                                        <RadioGroup
                                            name="gender"
                                            value={formValues.gender}
                                            onChange={FormInputChange}
                                            row
                                            className={classes.form_Radiobtn}
                                        >
                                            <FormControlLabel
                                                key="male"
                                                value="male"
                                                control={<Radio size="small" />}
                                                label="Male"
                                            />
                                            <FormControlLabel
                                                key="female"
                                                value="female"
                                                control={<Radio size="small" />}
                                                label="Female"
                                            />
                                            <FormControlLabel
                                                key="other"
                                                value="other"
                                                control={<Radio size="small" />}
                                                label="Other"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} className={classes.form_course_box}>
                                    <InputLabel id="date">Date of Birth</InputLabel>
                                    <TextField
                                        type='date'
                                        name='date'
                                        id='date'
                                        fullWidth={true}
                                        defaultValue={formValues.date}
                                        variant='outlined'
                                        margin='normal'
                                        inputProps={{
                                            min: "1920-01-01",
                                            max: dateLimit.toISOString().slice(0, 10)
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Box sx={{ marginBottom: "6px" }}>
                                        <FormLabel className={classes.form_imgtitle}>Image</FormLabel>
                                    </Box>
                                    <TextField
                                        id="img"
                                        name="img"
                                        type="file"
                                        fullWidth={true}
                                        value={formValues.img}
                                        onChange={FormInputChange}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        id="occoupation"
                                        name="occoupation"
                                        label="Occoupation"
                                        type="text"
                                        fullWidth={true}
                                        value={formValues.occoupation}
                                        onChange={FormInputChange}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} className={classes.form_course_box}>
                                    <FormControl fullWidth>
                                        <InputLabel id="coursename">Course Name</InputLabel>
                                        <Select
                                            id="coursename"
                                            name="coursename"
                                            labelId="coursename"
                                            label="coursename"
                                            fullWidth={true}
                                            value={formValues.coursename}
                                            onChange={FormInputChange}
                                            className={classes.form_course}
                                        >
                                            <MenuItem key="canada" value="Canada">
                                                Canada
                                            </MenuItem>
                                            <MenuItem key="japan" value="Japan">
                                                Japan
                                            </MenuItem>
                                            <MenuItem key="germany " value="Germany">
                                                Germany
                                            </MenuItem>
                                        </Select>

                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AdmissionForm

