import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "../Theme";
//import counts from "../image/Code.jpg";
import counts from "../image/realisations.avif";

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

export const pageCss = makeStyles(() => ({
  uni_section: {
    padding: "80px 0px 50px 0px !important",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0px 20px 0px !important",
    },
  },
  //Home Page
  home_course_section: {
    background: Theme.colors.bg1,
    padding: "80px 0px 50px 0px !important",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0px 20px 0px !important",
    },
  },
  home_course: {
    position: "relative",
  },
  home_course_slider: {
    marginTop: "30px !important",
    position: "relative",
    marginBottom: "50px !important",
  },
  home_course_slider_box: {
    //padding:"10px !important",
  },
  home_carosol_title_padding: {
    padding: "0px 10px 0px 10px !important",
  },
  //home mantor
  home_mantor: {
    position: "relative",
  },
  home_mantor_box: {
    marginTop: "30px !important",
    position: "relative",
    marginBottom: "50px !important",
    display: "flex",
    justifyContent: "center",
  },
  home_view_all_button: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "16px !important",
    fontWeight: "500 !important",
    // borderRadius:"8px",
    color: Theme.colors.base7,
    // color: Theme.colors.base1,
    // backgroundColor: Theme.colors.base7,
  },
  //home count
  home_count_section: {
    position: "relative",
    background: `url(${counts})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "50px 0px !important",
    zIndex: 10,
    "&:before": {
      position: "absolute",
      content: '""',
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: "rgb(36 32 32 / 29%)",
      zIndex: -1,
    },
  },
  home_count_title: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "2.5rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.4 !important",
    color: Theme.colors.base1,
    textAlign: "center",
  },
  home_count_box: {
    marginTop: "30px !important",
    position: "relative",
    marginBottom: "50px !important",
  },
  count_icon_box: {
    display: "flex",
    alignItems: "center",
  },
  count_icon: {
    backgroundColor: Theme.colors.base7,
    color: Theme.colors.base1,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    "& svg": {
      fontSize: "40px !important",
      padding: "10px !important",
    },
    marginRight: "20px",
  },
  count_content: {},
  count_title: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "2rem !important",
    fontWeight: "600 !important",
    lineHeight: "1.4 !important",
    color: Theme.colors.base1,
    marginBottom: ".1rem !important",
  },
  count_des: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "1rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.6 !important",
    color: Theme.colors.base1,
    marginBottom: ".1rem !important",
    opacity: "0.70",
  },
  //home testimonial
  home_testimonial_section: {
    background: Theme.colors.bg1,
    padding: "80px 0px 30px 0px !important",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0px 20px 0px !important",
    },
  },
  home_testimonial: {
    position: "relative",
    "& .slick-dots": {
      bottom: "-45px !important",
    },
    "& .slick-dots li": {
      width: "14px !important",
      height: "14px !important",
    },
    "& .slick-dots li button:before": {
      fontSize: "12px !important",
    },
    "& .slick-dots li button:focus:before": {
      color: Theme.colors.base7,
    },
    "& .slick-dots li button:hover:before": {
      color: Theme.colors.base7,
    },
    "& .slick-dots li.slick-active button:before": {
      color: Theme.colors.base7,
      opacity: 1,
    },
  },
  home_testimonial_box: {
    marginTop: "30px !important",
    marginBottom: "50px !important",
  },
  //home blog
  home_blog_section: {
    background: Theme.colors.bg1,
    padding: "30px 0px 50px 0px !important",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0px 20px 0px !important",
    },
  },
  home_blog: {
    position: "relative",
  },
  home_blog_box: {
    marginTop: "30px !important",
    marginBottom: "50px !important",
  },

  //courses css
  course_section: {
    padding: "60px 0px 50px 0px !important",
    background: Theme.colors.bg1,
  },
  course_count_title: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "1rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.4 !important",
    color: Theme.colors.base6,
    padding: "0rem 0rem 2rem 0rem !important",
  },

  course_banner: {
    padding: "50px 0px 50px 0px !important",
    background: Theme.colors.base7,
  },

  //single course
  single_course_tabs_section: {
    background: Theme.colors.base1,
    boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
    borderRadius: ".5rem",
    padding: "10px 20px 20px 20px !important",
    marginTop: "-80px !important",
    "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: ".95rem  !important",
      fontWeight: "500 !important",
      textTransform: "inherit",
    },
    "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
      color: Theme.colors.base7,
    },
    "& .css-1aquho2-MuiTabs-indicator": {
      backgroundColor: Theme.colors.base7,
    },
    "& .css-heg063-MuiTabs-flexContainer": {
      borderBottom: "1px solid #0000001f",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px 0px 30px 0px !important",
    },
  },
  single_course_tabs_box: {
    //padding: "10px 20px 30px 20px !important",
    "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
      boxShadow: "none !important",
      borderRadius: "0px !important",
    },
    "& .css-ahj2mt-MuiTypography-root": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: "1rem  !important",
      fontWeight: "500 !important",
    },
    "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
      margin: "10px 0px !important",
    },
    "& h4": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: ".95rem  !important",
      fontWeight: "400 !important",
      lineHeight: "1.6 !important",
      display: "flex",
      alignItems: "center !important",
    },
  },
  single_course_tabs_content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 0px 10px 0px !important",
  },
  single_course_tabs_icon: {
    fontSize: "1.2rem  !important",
    background: "#a8a3b94a !important",
    color: "#a8a3b9!important",
    borderRadius: "50%",
    padding: "5px !important",
    marginRight: "10px !important",
  },
  single_course_tabs: {
    margin: "10px 0px 0px 0px !important",
  },
  single_course_tabs_list: {
    borderBottom: "1px solid #0000001f",
    borderRadius: "0px !important",
    "&:last-child": {
      borderBottom: "0px",
    },
  },
  single_course_tabs_des: {
    padding: "25px 5px 20px 5px !important",
  },

  //blog page css
  blog_section_all: {
    padding: "50px 0px 50px 0px !important",
    background: Theme.colors.bg1,
  },
  blog_section_box: {
    background: Theme.colors.base1,
    boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
    borderRadius: ".5rem",
    overflow: "hidden",
    "&:hover": {
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
    },
  },
  blog_section_box_thumbnail: {},
  blog_thumbnail: {
    width: "100%",
    height: "auto",
  },
  blog_category: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: ".875rem!important",
    fontWeight: "500 !important",
    lineHeight: "1.4 !important",
    padding: "15px 15px 0px 15px !important",
    color: Theme.colors.base7,
  },
  blog_title: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "1.25rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.4 !important",
    padding: "15px 15px 0px 15px !important",
    "& a": {
      color: Theme.colors.base6,
    },
  },
  blog_des: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.4 !important",
    padding: "15px 15px 25px 15px !important",
    color: Theme.colors.des,
  },

  //single blog
  blog_post_img_box: {
    margin: "30px 0px 20px 0px !important",
  },
  blog_post_img: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  single_blog_text: {
    "& p": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: "0.875rem !important",
      fontWeight: "500 !important",
      lineHeight: "1.8 !important",
      padding: "5px 5px 5px 5px !important",
      color: Theme.colors.des,
    },
    padding: "0px 0px 30px 0px !important",
  },

  //Faq css
  faq_tabs_box: {
    padding: "50px 20px 50px 20px !important",
    "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
      boxShadow: "none !important",
      borderRadius: "0px !important",
    },
    "& .css-ahj2mt-MuiTypography-root": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: "1rem  !important",
      fontWeight: "500 !important",
    },
    "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
      margin: "10px 0px !important",
    },
    "& h4": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: "1rem  !important",
      fontWeight: "500 !important",
      lineHeight: "1.6 !important",
      color: Theme.colors.des,
    },
  },
  faq_tabs: {
    margin: "10px 0px 0px 0px !important",
  },
  Faq_tabs_list: {
    borderBottom: "1px solid #0000001f",
    borderRadius: "0px !important",
    "&:last-child": {
      borderBottom: "0px",
    },
    "& h3": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: "1.1rem  !important",
      fontWeight: "600 !important",
      lineHeight: "1.6 !important",
    },
  },
  faq_tabs_content: {
    padding: "0px 0px 10px 0px !important",
  },

  //common css
  slider_title: {
    fontFamily: "Inter,sans-serif !important",
    fontSize: "2rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.4 !important",
    color: Theme.colors.base6,
  },

  //contact
  contact: {
    padding: "40px 0px 40px 0px !important",
  },
  contact_text_area: {
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
    width: "50%",
  },
  contact_info_section: {
    padding: "50px 0px 0px 0px !important",
  },
  contact_information: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  contact_info_left: {
    marginRight: "15px",
  },
  contact_info_icon: {
    boxHhadow: "0 0 0 0 #ffffff",
    display: "inline-block",
    textAlign: "center",
    padding: "0 0 0 0",
    borderWidth: "0px",
    width: "88px",
    height: "88px",
    lineHeight: "88px",
    borderRadius: "100%",
    position: "relative",
    "& i": {
      fontSize: "24px",
      width: "24px",
      height: "24px",
      lineHeight: "24px",
    },
  },
  contact_ingo_right: {
    paddingRight: "10px",
    "& a": {
      "&:hover": {
        color: Theme.colors.maincolor,
      },
    },
  },
  contact_ingo_right_title: {
    color: Theme.colors.colorvariable,
    fontFamily: "Jost  !important",
    fontSize: "30px !important",
    fontWeight: "500 !important",
    lineHeight: "30px !important",
    margin: "0px 0px 5px 0px !important",
  },
  contact_ingo_right_description: {
    color: Theme.colors.des,
    fontFamily: "Open Sans !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "30px !important",
    textDecoration: "none",
  },
  //contact form
  contact_form: {},

  //Admission page
  admission_form: {
    background: "#F5F4F8 !important",
    padding: "80px 0px ",
  },

  //Form
  form_box: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "15px 5px",
    },
    margin: "0 auto",
    background: "#ffffff",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    padding: "30px 30px",
    borderRadius: "8px",
  },
  form_title: {
    fontFamily: "Jost  !important",
    fontSize: "2rem !important",
    fontWeight: "500 !important",
    margin: "0px 0px 30px 0px !important",
    textAlign: "center",
  },

  //text fild
  cssLabel: {
    color: "#6f6b80 !important",
    fontFamily: "Jost  !important",
    lineHeight: 1.6,
    fontSize: "18px !important",
    "& .Mui-focused": {
      color: "#6f6b80 !important",
    },
  },
  //input props root
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      {
        //opacity: 0.5,
        border: "1px solid #d6dbe5",
        borderRadius: "12px",
      },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderRadius: "12px",
      border: "1px solid #d6dbe5",
    },
    "&$cssFocused $notchedOutline": {
      color: "#6f6b80 !important",
      border: "1px solid #d6dbe5 !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d6dbe5 !important",
      borderRadius: "12px",
      fontFamily: "Jost  !important",
    },
    "& .MuiInputBase-input": {
      color: "#6f6b80 !important",
      fontFamily: "Jost  !important",
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
  },
  notchedOutline: {},
  cssFocused: {},
  forminput: {
    marginBottom: "10px !important",
  },

  //radio btn fild
  form_Radiotitle: {
    fontSize: "18px !important",
    color: "#6f6b80 !important",
    fontFamily: "Jost  !important",
  },
  form_Radiobtn: {
    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root": {
      color: "#6f6b80 !important",
      fontFamily: "Jost  !important",
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
    "& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label": {
      color: "#6f6b80 !important",
      fontFamily: "Jost  !important",
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
  },
  //form img fild
  form_imgtitle: {
    fontSize: "18px !important",
    color: "#6f6b80 !important",
    fontFamily: "Jost  !important",
    marginBottom: "2px !important",
  },
  form_course_box: {
    "& label": {
      fontSize: "18px !important",
      color: "#6f6b80 !important",
      fontFamily: "Jost  !important",
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "18px !important",
      color: "#6f6b80 !important",
      fontFamily: "Jost  !important",
    },
    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#6f6b80 !important",
    },
  },
  form_course: {
    color: "#6f6b80 !important",
    fontFamily: "Jost  !important",
    lineHeight: 1.6,
    fontSize: "18px !important",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d6dbe5 !important",
      borderRadius: "12px",
      fontFamily: "Jost  !important",
    },
    "& .MuiInputBase-input": {
      color: "#6f6b80 !important",
      fontFamily: "Jost  !important",
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
  },
  //end admission page

  //pagination
  pagination: {
    padding: "40px 0px 20px 0px !important",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      backgroundColor: Theme.colors.base3,
      color: Theme.colors.base1,
    },
    "& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root:hover": {
      backgroundColor: Theme.colors.base3,
      color: Theme.colors.base1,
    },
    "& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root": {
      fontFamily: "Inter,sans-serif !important",
      fontSize: ".875rem !important",
      fontWeight: "500 !important",
      mxWidth: "35px",
      height: "35px",
    },
  },

  //common css
  button: {
    boxShadow: "0 1px 3px rgba(3,0,71,.09)!important",
    textAlign: "center",
    display: "inline-block !important",
    fontFamily: "Inter,sans-serif !important",
    fontSize: ".875rem !important",
    fontWeight: "600 !important",
    lineHeight: "1.6 !important",
    verticalAlign: "middle !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    backgroundColor: "transparent !important",
    border: "1px solid transparent !important",
    padding: "0.75rem 1.25rem !important",
    borderRadius: "0.25rem !important",
    textTransform: "inherit !important",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important",
  },
  button_2: {
    color: Theme.colors.base1,
    backgroundColor: Theme.colors.base7,
    borderColor: Theme.colors.base7,
  },
}));
