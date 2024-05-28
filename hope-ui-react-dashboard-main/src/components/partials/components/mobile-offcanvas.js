import React, { useState } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo";

const MobildeOffcanvas = () => {
  //location
  let location = useLocation();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <button
        data-trigger="navbar_main"
        className="d-xl-none btn btn-primary rounded-pill p-1 pt-0"
        type="button"
        onClick={handleShow}
      >
        <svg width="20px" height="20px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
          ></path>
        </svg>
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className=" mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav mx-md-auto"
      >
        <Offcanvas.Header closeButton>
          <Link to="/dashboard" className="navbar-brand">
            <Logo />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav nav">
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/horizontal" ? "active" : ""
                } nav-link `}
                to="/horizontal"
              >
                {" "}
                Horizontal{" "}
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/dual-horizontal" ? "active" : ""
                } nav-link `}
                to="/dual-horizontal"
              >
                {" "}
                Dual Horizontal{" "}
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/dual-compact" ? "active" : ""
                } nav-link `}
                to="/dual-compact"
              >
                <span className="item-name">Dual Compact</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/boxed" ? "active" : ""
                } nav-link `}
                to="/boxed"
              >
                {" "}
                Boxed Horizontal{" "}
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/boxedFancy" ? "active" : ""
                } nav-link `}
                to="/boxedFancy"
              >
                {" "}
                Boxed Fancy
              </Link>
            </Nav.Item>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobildeOffcanvas;
