import React from "react";
import { Link } from "react-router-dom";
import logoPic from "../../../assets/logoEnsac.png";
import { comCss } from "../../ComponentsCss";

const Logo = () => {
  const classes = comCss();

  return (
    <>
      <Link to="/" style={{ width: "5rem", height: "3rem" }}>
        <img
          src={logoPic}
          alt="logo"
          className={classes.img_responsive}
          style={{ width: "8rem", height: "auto", objectFit: "cover" }}
        />
      </Link>
    </>
  );
};

export default Logo;
