import { createTheme, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "../Theme";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const useStyles = makeStyles(() => ({
  cssLabel: {
    color: Theme.colors.color3,
    fontFamily: "Nunito !important",
    lineHeight: 1.6,
    fontSize: "18px",
    "&.Mui-focused": {
      color: Theme.colors.color3,
    },
  },
  //input props root
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      {
        //opacity: 0.5,
        border: "1px solid #d6dbe5",
        borderRadius: "0px",
      },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderRadius: "12px",
      border: "1px solid #d6dbe5",
    },
    "&$cssFocused $notchedOutline": {
      color: Theme.colors.color3,
      border: "1px solid #d6dbe5 !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d6dbe5 !important",
      borderRadius: "12px",
      fontFamily: "Jost",
    },
    "& .MuiInputBase-input": {
      color: Theme.colors.color3,
      fontFamily: "Jost",
      lineHeight: 1.6,
      fontSize: "18px",
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
  forminput: {
    marginBottom: "10px !important",
  },
}));

export const RenderInputText = ({
  lablel,
  name,
  contactinfo,
  onChange,
  multiline,
  rows,
}) => {
  const { data, errors } = contactinfo;
  const classes = useStyles();
  return (
    <TextField
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
      className={classes.forminput}
      variant="outlined"
      label={lablel}
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
    />
  );
};
