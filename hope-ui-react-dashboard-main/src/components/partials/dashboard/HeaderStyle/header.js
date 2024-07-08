import React, { useEffect, Fragment, memo, useContext, useState } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "../../../dropdowns";

//img
import flag1 from "../../../../assets/images/Flag/flag001.png";
import flag2 from "../../../../assets/images/Flag/flag-02.png";
import flag3 from "../../../../assets/images/Flag/flag-03.png";
import flag4 from "../../../../assets/images/Flag/flag-04.png";
import flag5 from "../../../../assets/images/Flag/flag-05.png";
import flag6 from "../../../../assets/images/Flag/flag-06.png";
import shapes1 from "../../../../assets/images/shapes/01.png";
import shapes2 from "../../../../assets/images/shapes/02.png";
import shapes3 from "../../../../assets/images/shapes/03.png";
import shapes4 from "../../../../assets/images/shapes/04.png";
import shapes5 from "../../../../assets/images/shapes/05.png";
import avatars1 from "../../../../assets/images/avatars/01.png";
import avatars2 from "../../../../assets/images/avatars/avtar_1.png";
import avatars3 from "../../../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../../../assets/images/avatars/avtar_5.png";

// Notre image de profile par défaut :
import defaultProfilePic from "../../../../assets/images/avatars/default-profile-picture1.jpg";
import Logo from "../../components/logo";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";
import { UserContext } from "../../../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import socket from "../../../../Socket/socket";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
// petite iconee :
import letter from "./letter.png";
TimeAgo.addLocale(ru);
const Header = memo((props) => {
  const navbarHide = useSelector(SettingSelector.navbar_show);
  const headerNavbar = useSelector(SettingSelector.header_navbar);
  useEffect(() => {
    // navbarstylemode
    if (headerNavbar === "navs-sticky" || headerNavbar === "nav-glass") {
      window.onscroll = () => {
        if (document.documentElement.scrollTop > 50) {
          document.getElementsByTagName("nav")[0].classList.add("menu-sticky");
        } else {
          document
            .getElementsByTagName("nav")[0]
            .classList.remove("menu-sticky");
        }
      };
    }
  });
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };
  // LOGIQUE BACKEND COMMENCE ICI :
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const isResp = currentUser?.isResp;

  const [demands, setDemands] = useState();
  const [numDems, setNumDems] = useState(0);
  const entity = currentUser?.entity;
  const [fetchedUser, setFetchedUser] = useState(null);
  const [demNotifs, setDemNotifs] = useState();
  const [numResps, setNumResps] = useState(0);
  const [profNotifs, setProfNotifs] = useState([]);
  // student Resps :
  const [resps, setResps] = useState([]);
  useEffect(() => {
    const fetchConcernedUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/${entity.toLowerCase()}s/get/${
            currentUser?.id
          }`
        );
        setFetchedUser(response.data);
        console.log("This is the fetched user : ");
        console.log(response.data);
      } catch (err) {
        // un toast pour indiquer que des choses ne marchent pas...
        toast.error(
          "Ops! il semble que quelque chose ne marche pas, veillez actualiser cette page !"
        );
      }
    };
    if (token) {
      fetchConcernedUser();
    }
  }, []);
  const fetchDemands = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/enrollments/getNotifEnrolls`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const sortedData = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setDemands(sortedData);
      setNumDems(sortedData.length);
    } catch (err) {
      toast.error(
        "Erreur survenue à l'essaie de lecture des demandes d'inscription"
      );
      console.log(err);
    }
  };
  useEffect(() => {
    if (entity == "professor" && isResp) {
      fetchDemands();
    }
  }, []);
  useEffect(() => {
    if (entity == "professor" && isResp) {
      const fetchDemandSides = async () => {
        const sidesList = [];
        for (let i = 0; i < demands?.length; ++i) {
          const student = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/students/get/${demands[i].studentId}`
          );
          const training = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${demands[i].trainingId}`
          );
          const studentName =
            student.data.firstName + " " + student.data.lastName;
          const trainingName = training.data.name;
          const createdAt = demands[i].createdAt;
          sidesList.push({ studentName, trainingName, createdAt });
        }
        setDemNotifs(sidesList);
      };
      fetchDemandSides();
    }
  }, [demands]);
  const markDemandsAsRead = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/enrollments/readDemands/${currentUser?.id}`
      );
      setNumDems(0);
    } catch (err) {
      toast.error(
        "Une erreur est survenue dans la tentative de marquer les notifs comme lues !!"
      );
      console.log(err);
    }
  };
  // lecture des notifications des étudiants :
  useEffect(() => {
    if (entity == "Student") {
      const readResps = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/notifications/getResps`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const sortedData = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setResps(sortedData);
        setNumResps(sortedData.length);
      };
      readResps();
    }
  }, []);
  // reading responses :
  const markRespsAsRead = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/notifications/markRespsAsRead/${currentUser?.id}`
      );
      setNumResps(0);
    } catch (err) {
      toast.error(
        "Une erreur est survenue à l'issue de la tentaive de marquer les notifs comme lues.."
      );
      console.log(err);
    }
  };
  useEffect(() => {
    const readProfessorNotifications = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/notifications/getResps`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfNotifs(response.data);
        setNumResps(response.data.length);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les notifications des professeurs"
        );
      }
    };
    if (entity == "professor") {
      readProfessorNotifications();
    }
  }, []);
  // Socket : ---------------------------------------------
  useEffect(() => {
    socket.on("receive_message", (data) => {
      fetchDemands();
      toast.success(data.message);
    });
  }, []);
  return (
    <Fragment>
      <Navbar
        expand="lg"
        variant="light"
        className={`nav iq-navbar ${headerNavbar} ${navbarHide.join(" ")}`}
      >
        <Container fluid className="navbar-inner">
          <Link to="/dashboard" className="navbar-brand">
            <Logo />
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            <i className="icon">
              <svg width="20px" height="20px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </i>
          </div>
          <div className="input-group search-input">
            <span className="input-group-text" id="search-input">
              <svg
                width="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11.7669"
                  cy="11.7666"
                  r="8.98856"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
                <path
                  d="M18.0186 18.4851L21.5426 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
            />
          </div>
          <Navbar.Toggle aria-controls="navbarSupportedContent">
            <span className="navbar-toggler-icon">
              <span className="mt-2 navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav
              as="ul"
              className="mb-2 ms-auto navbar-list mb-lg-0 align-items-center"
            >
              <Dropdown
                onClick={markRespsAsRead}
                style={{ position: "relative" }}
                as="li"
                className="nav-item"
              >
                <Dropdown.Toggle
                  as={CustomToggle}
                  href="#"
                  variant=" nav-link"
                  id="notification-drop"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    width="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="bg-danger dots"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="p-0 sub-drop dropdown-menu-end"
                  aria-labelledby="notification-drop"
                >
                  <div className="m-0 shadow-none card">
                    <div className="py-3 card-header d-flex justify-content-between bg-primary">
                      <div className="header-title">
                        <h5 className="mb-0 text-white">Notifications</h5>
                      </div>
                    </div>
                    <div className="p-0 card-body">
                      {entity != "professor" &&
                        resps?.map((item, index) => (
                          <Link
                            to="/dashboard/app/card-list-training"
                            key={index}
                            className="iq-sub-card"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                className="p-1 avatar-40 rounded-pill bg-soft-primary"
                                src={item.picture}
                                alt=""
                              />
                              <div className="ms-3 w-100">
                                <h6 className="mb-0 ">{item.title}</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="mb-0">{item.content}</p>
                                  <small className="float-right font-size-12">
                                    <ReactTimeAgo
                                      date={new Date(item.createdAt)}
                                      locale="en-US"
                                    />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      {entity == "professor" &&
                        profNotifs?.map((item, index) => (
                          <Link
                            to={
                              item.title == "Nouveau commentaire" && item.link
                            }
                            key={index}
                            className="iq-sub-card"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                className="p-1 avatar-40 rounded-pill bg-soft-primary"
                                src={item.picture}
                                alt=""
                              />
                              <div className="ms-3 w-100">
                                <h6 className="mb-0 ">{item.title}</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="mb-0">{item.content}</p>
                                  <small className="float-right font-size-12">
                                    <ReactTimeAgo
                                      date={new Date(item.createdAt)}
                                      locale="en-US"
                                    />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </Dropdown.Menu>
                <div
                  style={{
                    position: "absolute",
                    display: numResps ? "flex" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "19px",
                    width: "19px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    top: "0",
                  }}
                >
                  {resps && numResps}
                </div>
              </Dropdown>
              {entity == "professor" && (
                <Dropdown
                  style={{ position: "relative" }}
                  onClick={markDemandsAsRead}
                  as="li"
                  className="nav-item"
                >
                  <Dropdown.Toggle
                    as={CustomToggle}
                    href="#"
                    variant="nav-link"
                    id="mail-drop"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="bg-primary count-mail"></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="p-0 sub-drop dropdown-menu-end"
                    aria-labelledby="mail-drop"
                  >
                    <div className="m-0 shadow-none card">
                      <div className="py-3 card-header d-flex justify-content-between bg-primary">
                        <div className="header-title">
                          <h5 className="mb-0 text-white">
                            Demandes d'inscription
                          </h5>
                        </div>
                      </div>
                      <div className="p-0 card-body ">
                        {demNotifs?.map((demand, index) => (
                          <Link
                            to="/dashboard/app/notifications-list"
                            key={index}
                            className="iq-sub-card"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                className="p-1 avatar-40 rounded-pill bg-soft-primary"
                                src={letter}
                                alt=""
                              />
                              <div className="ms-3 w-100">
                                <h6 className="mb-0 ">{demand.studentName}</h6>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="mb-0">Nouvelle demande</p>
                                  <small className="float-right font-size-12">
                                    {
                                      <ReactTimeAgo
                                        date={new Date(demand.createdAt)}
                                        locale="en-US"
                                      />
                                    }{" "}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Dropdown.Menu>
                  <div
                    style={{
                      position: "absolute",
                      display: numDems ? "flex" : "none",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "19px",
                      width: "19px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      top: "0",
                    }}
                  >
                    {demands && numDems}
                  </div>
                </Dropdown>
              )}
              <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                  as={CustomToggle}
                  variant=" nav-link py-0 d-flex align-items-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={
                      fetchedUser?.profilePicture
                        ? fetchedUser?.profilePicture
                        : defaultProfilePic
                    }
                    alt="User-Profile"
                    className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
                  />

                  <div className="caption ms-3 d-none d-md-block ">
                    <h6 className="mb-0 caption-title">
                      {currentUser?.fullName}
                    </h6>
                    <p className="mb-0 caption-sub-title">
                      {currentUser?.entity == "professor"
                        ? "Professeur"
                        : currentUser?.entity == "admin"
                        ? "Administrateur"
                        : "Etudiant"}
                    </p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <Dropdown.Item
                    href={`/dashboard/app/user-profile/${currentUser?.id}`}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="/dashboard/app/user-profile-edit">
                    Modifier Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="#">Privacy Setting</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
});

export default Header;
