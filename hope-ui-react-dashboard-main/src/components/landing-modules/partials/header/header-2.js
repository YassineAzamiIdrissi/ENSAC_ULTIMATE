import React, { Fragment, memo } from 'react'

// react-bootstrap
import { Container, Nav, Navbar,Offcanvas,Dropdown } from 'react-bootstrap'

// router-dom
import { Link,useLocation } from 'react-router-dom'

// components
import LandingOffcanvasHeader from '../../partials/header/landing-offcanvas-header'
import CustomToggle from '../../../dropdowns'
import Logo from '../../../partials/components/logo'

const Header2 = memo((props) => {
  let location = useLocation();
  return (
    <Fragment>
        <Navbar expand="xl" className="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu">
  <Container fluid className="navbar-inner">
    <div className="d-flex align-items-center justify-content-between w-100 landing-header"> 
    <Link to="/dashboard" className="navbar-brand">
            <Logo />
          </Link>
        <div className="d-flex align-items-center d-xl-none">
        <LandingOffcanvasHeader/>
        <Link to="/dashboard" className="navbar-brand">
            <Logo />
          </Link>
        </div> 
        <ul className="d-block d-xl-none list-unstyled m-0">
                      <Dropdown as="li" className="nav-item iq-responsive-menu ">
                    <Dropdown.Toggle as={CustomToggle} variant="btn btn-sm bg-body">
                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul" className="dropdown-menu-end" style={{width: '18rem'}} >
                        <li className="px-3 py-0">
                            <div className="form-group input-group mb-0"> 
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="input-group-text">
                                <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            </div>
                        </li>
                    </Dropdown.Menu>
                      </Dropdown>
                    </ul>
      {/* <!-- Horizontal Menu Start --> */}
      <Navbar expand="xl" id="navbar_main" className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav">
      <Container fluid className="p-lg-0">
        <Offcanvas.Header className="px-0">
            <Navbar.Brand className="ms-3">
              {/* {{> partials/components/logo color="true"}} */}
              
            </Navbar.Brand>
            <button className="btn-close float-end px-3"></button>
        </Offcanvas.Header>
          <Nav as="ul" className="navbar-nav iq-nav-menu  list-unstyled" id="header-menu">
            <Nav.Item as="li">
                <Link className={`${location.pathname === '/landing-modules/home'} nav-link `}to="#">
                  <span className="item-name">Home</span>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" height="18" viewBox="0 0 24 24"><path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
                <Nav as="ul" className="iq-header-sub-menu list-unstyled collapse" id="homeData">
                  <Nav.Item as="li">  <Link className={`${location.pathname === '/landing-modules/home' ? 'active' : ''} nav-link `} to="/landing-modules/home">App Landing Page</Link></Nav.Item> 
                  <Nav.Item as="li">  <Link className={`${location.pathname === '/landing-modules/software-landing-page' ? 'active' : ''} nav-link `} to="/landing-modules/software-landing-page"> Software Landing Page </Link> </Nav.Item>
                </Nav>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className={`${location.pathname === '/landing-modules/about' ? 'active' : ''} nav-link `} to="/landing-modules/about">About Us </Link>
              </Nav.Item>
            <Nav.Item as="li">
              <Link className={`${location.pathname === '/landing-modules/features' ? 'active' : ''} nav-link `} to="/landing-modules/features"> Features </Link>
              </Nav.Item>
            <Nav.Item as="li">
              <Link className={`${location.pathname === '/landing-modules/pricing' ? 'active' : ''} nav-link `} to="/landing-modules/pricing">Pricing</Link>
              </Nav.Item>
            <Nav.Item as="li">
              <Link className={`${location.pathname === '/landing-modules/blog' ? 'active' : ''} nav-link `} to="/landing-modules/blog">Blog</Link>
              </Nav.Item> 
            <Nav.Item as="li">
              <Link className={`${location.pathname === '/landing-modules/faq' ? 'active' : ''} nav-link `} to="/landing-modules/faq">Faq</Link>
              </Nav.Item>
            <Nav.Item as="li">
              <Link className={`${location.pathname === '/landing-modules/contact-us' ? 'active' : ''} nav-link `} to="/landing-modules/contact-us">Contact Us</Link></Nav.Item>
        </Nav>
      </Container> 
      {/* <!-- container-fluid.// --> */}
      </Navbar>
{/* <!-- Sidebar Menu End --> */}
     </div>
  </Container>
</Navbar>
    </Fragment>
  )
})

export default Header2