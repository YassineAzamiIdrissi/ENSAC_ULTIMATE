import { createTheme } from "@mui/material";
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

export const comCss = makeStyles(() => ({
    img_responsive: {
        width: "100%",
        height: "auto",
    },
    //navbar
    navbar_section: {
        backgroundColor: Theme.colors.base1,
        padding: "10px 0px",
    },
    navbar_section_active: {
        position: "fixed",
        backgroundColor: Theme.colors.base1,
        padding: "6px 0px",
        width: "100%",
        zIndex: "999999999",
        transition: "0.5s ease",
    },
    navbar_box: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    navbar_laft: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            justifyContent: "space-between",
            width: "100%"
        },
    },
    navbar_laft_logo: {
        marginRight: "2rem!important",
    },
    navbar_laft_menu: {
        marginRight: "2rem!important",
        [theme.breakpoints.down("md")]: {
            marginRight: "0rem!important",
        },
    },
    navbar_link_computer: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            display: "none !important"
        },
    },
    navbar_link_mobail: {
        [theme.breakpoints.up("md")]: {
            display: "none !important"
        },
        "& .MuiButtonBase-root": {
            color: Theme.colors.base6,
        },
        "& .MuiButtonBase-root svg": {
            fontSize: "30px !important",
        },
    },
    drawerPaper: {
        padding: "30px 15px 15px 15px",
        position: "relative",
    },
    clossessideNav: {
        position: "absolute !important",
        top: "3px",
        right: "3px",
    },
    nav_link_mobail: {
        padding: "10px !important",
    },
    nav_link: {
        textDecoration: "none !important",
        display: "block",
        fontFamily: "Inter,sans-serif",
        fontSize: ".950rem !important",
        fontWeight: "500",
        color: Theme.colors.base2,
        [theme.breakpoints.up("md")]: {
            padding: "0.3125rem 0.5rem !important",
        },
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
        "&:hover": {
            color: Theme.colors.base3,
        },
    },
    navbar_laft_searchbar: {
        marginRight: "2rem!important",

        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        border: `1px solid ${Theme.colors.base5}`,
        padding: "4px 7px !important",
        "& .MuiInputBase-input": {
            color: Theme.colors.base4,
        },
        [theme.breakpoints.down("md")]: {
            display: "none !important"
        },
    },
    navbar_laft_searchbar_icon: {
        fontSize: "18px !important",
        padding: theme.spacing(1, 1),
        color: Theme.colors.base4,
    },
    navbar_right: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            display: "none !important"
        },
    },

    //Hero banner
    hero_section: {
        background: Theme.colors.base8,
        padding: "50px 0px",
    },
    hero_banner: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column-reverse",
        },
    },
    hero_banner_laft: {
        paddingTop: "30px !important",
        paddingBottom: "30px !important",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            paddingTop: "30px !important",
            paddingBottom: "30px !important",
        },
        width: "50%",
    },
    hero_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "2.5rem !important",
        fontWeight: "700 !important",
        lineHeight: "1.3 !important",
        color: Theme.colors.base1,
        marginBottom: ".7rem !important",
        [theme.breakpoints.only("xs")]: {
            fontSize: "2rem !important",
        },
    },
    hero_des: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.25rem !important",
        fontWeight: "400 !important",
        lineHeight: "1.3 !important",
        color: Theme.colors.babe10,
        marginBottom: "2rem !important",
        width: "80%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    hero_button: {
        display: "flex",
    },
    hero_banner_right: {
        width: "50%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        marginBottom: "-5px",
    },

    //Extra 1
    extea1_section: {
        paddingTop: "1.5rem!important",
        paddingBottom: "1.5rem!important",
        position: "relative",
        color: Theme.colors.babe1,
        boxShadow: "0 1px 3px rgba(3,0,71,.09)!important",
    },
    extea1_icon_box: {
        display: "flex",
        alignItems: "center",
    },
    extea1_icon: {
        backgroundColor: "#ffeeda",
        color: " #c28135",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "20px !important",
            padding: "16px !important",
        },
        marginRight: "20px",
    },
    extea1_content: {},
    extea1_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1rem !important",
        fontWeight: "600 !important",
        lineHeight: "1.4 !important",
        color: Theme.colors.base6,
        marginBottom: ".1rem !important",
    },
    extea1_des: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "0.875rem !important",
        fontWeight: "400 !important",
        lineHeight: "1.6 !important",
        color: Theme.colors.des,
        marginBottom: ".1rem !important",
    },

    //Slidercourse css
    Slidercourse: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border: "1px solid #eae7f5",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
        overflow: "hidden",
        margin: "10px !important",
        transition: "box-shadow .25s ease",
        "&:hover": {
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
        },
    },

    slider_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.2rem !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        padding: "10px 10px 5px 10px !important",
        "& a": {
            color: Theme.colors.base2,
        },
        "& a:hover": {
            color: Theme.colors.base3,
        },
    },
    slider_time: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "14px !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        padding: "10px 10px 2px 10px !important",
        color: Theme.colors.base4,
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "18px !important",
            color: Theme.colors.base3,
            paddingRight: "8px !important",
        },
    },
    slider_label: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "14px !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        padding: "2px 10px 5px 10px !important",
        color: Theme.colors.base4,
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "18px !important",
            color: Theme.colors.base3,
            paddingRight: "8px !important",
        },
    },
    slider_Rating: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "14px !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        padding: "15px 10px 20px 10px !important",
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "16px !important",
            color: "#FFAA46 !important",
        },
    },
    divider: {
        height: "1px",
        background: Theme.colors.base5,
    },
    slider_bottom_section: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 10px 10px 10px !important",
    },
    slider_avater: {
        display: "flex",
        alignItems: "center",
        "& span": {
            fontFamily: "Inter,sans-serif !important",
            fontSize: "14px !important",
            fontWeight: "400 !important",
            lineHeight: "1.4 !important",
            marginLeft: "10px !important",
            color: Theme.colors.base4,
        },
    },
    img_avater: {
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "50%",
    },
    slider_bookmark: {
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "18px !important",
            color: "#FFAA46 !important",
        },
    },

    //page Banner
    page_banner: {
        padding: "50px 0px 50px 0px !important",
        background: Theme.colors.base7,
        textAlign: "center",
    },
    page_banner_singleCourse: {
        padding: "50px 0px 50px 0px !important",
        background: Theme.colors.base7,
        textAlign: "start",
    },
    page_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "2.5rem !important",
        fontWeight: "600 !important",
        lineHeight: "1.4 !important",
        textAlign: "center",

        color: Theme.colors.base1,
    },
    page_subtitle: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.25rem !important",
        fontWeight: "400 !important",
        lineHeight: "1.6 !important",
        color: Theme.colors.base1,
        margin: "10px 0px 0px 0px !important",
        width: "60%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    page_meta: {
        display: "flex",
        margin: "30px 0px 0px 0px !important",
        [theme.breakpoints.down("md")]: {
            flexFlow: "wrap",
        },
        "& span": {
            fontFamily: "Inter,sans-serif !important",
            fontSize: "14px !important",
            fontWeight: "500 !important",
            lineHeight: "1.4 !important",
            color: Theme.colors.base1,
            padding: "0px 15px 0px 0px !important",
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                display: "flex",
                margin: "0px 0px 10px 0px !important",
            },
        },
    },
    page_banner_icon: {
        "& svg": {
            fontSize: "16px !important",
            fontWeight: "500 !important",
            marginRight: "5px !important",
        },
    },
    page_banner_rating_icon: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "14px !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "16px !important",
            color: "#FFAA46 !important",
        },
    },
    //filter
    course_filter: {
        background: Theme.colors.base1,
        boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
        borderRadius: ".5rem",
    },
    filter_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1rem !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        color: Theme.colors.base6,
        padding: "1rem 1.5rem !important",
    },
    filter_category: {
        padding: "1.5rem 1.5rem !important",
    },
    filter_catagory_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: ".6875rem !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        textTransform: "uppercase",
        letterSpacing: "1px !important",
        color: Theme.colors.base11,
        padding: ".25rem 0rem !important",
        marginBottom: ".5rem!important",
    },
    filter_category_box: {},
    filter_category_link: {
        textDecoration: "none !important",
        display: "block",
        fontFamily: "Inter,sans-serif",
        fontSize: ".950rem !important",
        fontWeight: "400",
        color: Theme.colors.des,
        padding: ".5rem 0rem !important",
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
        "&:hover": {
            color: Theme.colors.base3,
        },
    },

    //course side bar
    course_sidebar: {
        marginTop: "-250px !important",
        [theme.breakpoints.down("md")]: {
            marginTop: "-100px !important",
        },
    },
    course_sidebar_box: {
        background: Theme.colors.base1,
        boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
        borderRadius: ".5rem",
        overflow: "hidden",
        padding: "10px 10px !important",
        marginBlock: "30px !important",
    },
    course_sidebar_box_1_image: {
        position: "relative",
        "& button": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: " translate(-50%,-50%)",
            background: Theme.colors.base1,
            padding: "15px !important",
            "& svg": {
                color: Theme.colors.base7,
            },
        },
        "& button:hover": {
            background: Theme.colors.base7,
            "& svg": {
                color: Theme.colors.base1,
            },
        },
        marginBottom: "10px !important",
    },
    single_course_img: {
        borderRadius: ".5rem",
    },
    course_sidebar_box_1_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.5rem  !important",
        fontWeight: "700 !important",
        lineHeight: "1.6 !important",
        "& span": {
            fontFamily: "Inter,sans-serif !important",
            fontSize: "1.5rem  !important",
            fontWeight: "600 !important",
            lineHeight: "1.6 !important",
            color: Theme.colors.base7,
            marginLeft: "4px !important",
        },
        marginBottom: "10px !important",
    },
    course_sidebar_box_1_modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        "& iframe":{
            width:600,
            height:400,
        },
        [theme.breakpoints.only("xs")]:{
            width: "80%",
            "& iframe":{
                width:"100%",
                height:300,
            },
        },
    },
    course_sidebar_box_1_modal_close_button: {
        position: "absolute !important",
        top: "4%",
        right: "3%",
        "& svg": {
            fontSize:"30px !important",
            color: Theme.colors.base1,
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
        transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important",
    },
    button_1: {
        color: Theme.colors.base6,
        backgroundColor: Theme.colors.base1,
        borderColor: Theme.colors.base1,
    },
    button_2: {
        color: Theme.colors.base1,
        backgroundColor: Theme.colors.base7,
        borderColor: Theme.colors.base7,
    },
    button_3: {
        color: Theme.colors.base1,
        backgroundColor: Theme.colors.base9,
        borderColor: Theme.colors.base9,
    },
    course_sidebar_button_1: {
        width: "100%",
        color: Theme.colors.base1,
        backgroundColor: Theme.colors.base7,
        borderColor: Theme.colors.base7,
        display: "block !important",
    },
    course_sidebar_button_2: {
        color: Theme.colors.like,
        border: `1px solid ${Theme.colors.like}`,
        display: "block !important",
        "&:hover": {
            color: Theme.colors.base1,
            backgroundColor: Theme.colors.like,
        },
    },
        course_sidebar_button_green: {
        color: Theme.colors.base9,
        border: `1px solid ${Theme.colors.base9}`,
        display: "block !important",
        marginTop: "10px !important",
        "&:hover": {
            color: Theme.colors.base1,
            backgroundColor: Theme.colors.base9,
        },
    },
    course_sidebar_box_2_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1rem  !important",
        fontWeight: "500 !important",
        borderBottom: "1px solid #0000001f",
        padding: "5px 0px 20px 0px !important",
    },
    course_sidebar_box_2_content: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: ".95rem  !important",
        fontWeight: "400 !important",
        lineHeight: "1.6 !important",
        display: "flex",
        alignItems: "center !important",
        padding: "10px 0px !important",
        borderBottom: "1px solid #0000001f",
        "&:last-child": {
            borderBottom: "0px",
        },
    },
    single_course_sidebar_icon: {
        fontSize: "1rem  !important",
        borderRadius: "50%",
        padding: "5px !important",
        marginRight: "10px !important",
    },

    //Mantor css
    mantor: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border: "1px solid #eae7f5",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
        overflow: "hidden",
        margin: "10px !important",
        transition: "box-shadow .25s ease",
        padding: "10px",
        "&:hover": {
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
        },
    },

    mantor_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.2rem !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        padding: "10px 10px 5px 10px !important",
        "& a": {
            color: Theme.colors.base2,
        },
        "& a:hover": {
            color: Theme.colors.base3,
        },
    },
    mantor_subtitle: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "14px !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        padding: "0px 10px 2px 10px !important",
        color: Theme.colors.base4,
        display: "flex",
        alignItems: "center",
    },
    mantor_sosial_media: {
        display: "flex",
        gap: "10px",
        padding: "10px 0px 20px 10px !important",
        "& a": {
            transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
            transitionDuration: ".15s",
            transitionProperty: ".3s",
            color: Theme.colors.base4,
        },
        "& a:hover": {
            transform: "scaleX(1.1) scaleY(1.1)",
            color: Theme.colors.base3,
        },
    },

    //Mantor css
    testimonial: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border: "1px solid #eae7f5",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgb(3 0 71 / 9%)",
        overflow: "hidden",
        margin: "10px !important",
        transition: "box-shadow .25s ease",
        "&:hover": {
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
        },
    },
    testimonial_description_section: {
        padding: "3.5rem!important",
    },

    testimonial_icon: {
        display: "flex",
        justifyContent: "center",
        fontSize: "50px",
        color: "#754ffe59 !important",
    },
    testimonial_des: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.3rem !important",
        fontWeight: "400 !important",
        lineHeight: "1.6 !important",
        textAlign: "center",
        letterSpacing: "-.03rem !important",
        marginTop: "1rem !important",
    },
    testimonial_name_section: {
        background: Theme.colors.base7,
        paddingBottom: "20px !important",
        marginTop: "20px",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
    },
    testimonial_img: {
        width: "5rem",
        height: "5rem",
        borderRadius: "50%",
        borderWidth: "4px!important",
        borderColor: Theme.colors.base7,
        borderStyle: "solid",
        marginTop: "-2.8rem!important",
    },


    testimonial_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.3rem !important",
        fontWeight: "500 !important",
        lineHeight: "1.4 !important",
        color: Theme.colors.base1,
        marginBottom: "5px !important",
    },
    testimonial_subtitle: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "14px !important",
        fontWeight: "400 !important",
        lineHeight: "1.4 !important",
        color: Theme.colors.base1,
        opacity: 0.60,
    },

    //footer
    footer: {
        padding: "10px 0px !important",
        "& p": {
            fontSize: "0.95rem  !important",
            textAlign: "center",
            color: Theme.colors.des,
        },
    },
    footer_content: {
        padding: "50px 0px !important",
    },
    footer_link: {
        padding: "6px !important",
    },
    footer_1: {
        "& h5": {
            fontFamily: "Inter,sans-serif !important",
            fontSize: "1.2rem  !important",
            fontWeight: "600 !important",
            padding: "15px 0px 18px 0px !important",
        },
    },
    footer_logo: {
        width: "50%",
    },
    footer_1_app_stor: {
        display: "flex",
        gap: "10px",
        "& a": {
            width: "40%",
        },
        [theme.breakpoints.only("xs")]: {
            padding: "0px 0px 0px 6px !important",
        },
        [theme.breakpoints.only("sm")]: {
            padding: "0px 0px 20px 6px !important",
        },
    },
    footer_2: {
        [theme.breakpoints.only("sm")]: {
            padding: "0px 0px 20px 6px !important",
        },
    },
    footer_3: {
        [theme.breakpoints.only("sm")]: {
            padding: "0px 0px 20px 6px !important",
        },
    },
    footer_4: {
        [theme.breakpoints.only("sm")]: {
            padding: "0px 0px 20px 6px !important",
        },
    },
    footer_4_list: {
        "& li": {
            fontFamily: "Inter,sans-serif !important",
            fontSize: "1rem  !important",
            [theme.breakpoints.only("md")]: {
                fontSize: ".90rem  !important",
            },
            fontWeight: "400 !important",
            padding: "6px !important",
            "& a": {
                fontFamily: "Inter,sans-serif !important",
                fontSize: "1rem  !important",
                [theme.breakpoints.only("md")]: {
                    fontSize: ".90rem  !important",
                },
                fontWeight: "400 !important",
            },
        },
    },
    footer_title: {
        fontFamily: "Inter,sans-serif !important",
        fontSize: "1.2rem  !important",
        fontWeight: "600 !important",
        padding: "6px !important",
        [theme.breakpoints.only("xs")]: {
            padding: "30px 0px 0px 6px !important",
        },
    },
    footer_4_sosial_media: {
        display: "flex",
        gap: "10px",
        padding: "10px 6px 5px 6px !important",
        "& a": {
            transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
            transitionDuration: ".15s",
            transitionProperty: ".3s",
        },
        "& a:hover": {
            transform: "scaleX(1.1) scaleY(1.1)",
        },
    },

    //scroll to top button css
    // scroll_to_top: {
    //     color: Theme.colors.base1,
    //     background: Theme.colors.base8,
    //     transition: "0.7s !important",
    // },

        //scroll to top button css
        scroll_to_top: {
            color: Theme.colors.base1,
            background: Theme.colors.base8,
            transition: "0.3s !important",
            display: "flex",
                justifyContent: "center",
                alignItems: "center",
            "&:hover": {
                color: Theme.colors.base1,
                background: Theme.colors.base6,
                borderRadius: '50%',
                padding: '30px',
                transition: 'all .3s  ease-in-out',
                
            },
        },

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
}))