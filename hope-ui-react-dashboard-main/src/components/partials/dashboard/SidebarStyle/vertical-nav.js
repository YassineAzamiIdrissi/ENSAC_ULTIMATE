import React, { useState, useContext, memo, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { UserContext } from "../../../../context/userContext";
import { Layers3 } from "lucide-react";
function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo((props) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");
  //location
  let location = useLocation();
  // logique backendd :
  const { currentUser } = useContext(UserContext);
  const entity = currentUser?.entity;
  const id = currentUser?.entity;
  const isResp = currentUser?.isResp;
  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Acceuil</span>
            <span className="mini-icon">-</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`${
              location.pathname === "/dashboard" ? "active" : ""
            } nav-link`}
            to={`/dashboard/app/user-profile/${id}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g>
                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
              </g>
            </svg>
            <i className="sidenav-mini-icon"> E </i>
            <span className="item-name">Mon profil</span>
          </Link>
        </li>
        {/* <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Pages</span>
            <span className="mini-icon">-</span>
          </Link>
        </li>
        <Accordion.Item
          as="li"
          eventKey="sidebar-special"
          bsPrefix={`nav-item ${active === "special" ? "active" : ""} `}
          onClick={() => setActive("special")}
        >
          <CustomToggle
            eventKey="sidebar-special"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <Layers3 />

            <span className="item-name">Special Pages</span>
            <i className="right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-special">
            <ul className="sub-nav">
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/billing"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/special-pages/billing"
                >
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className="sidenav-mini-icon"> B </i>
                  <span className="item-name">Billing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/calender"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/special-pages/calender"
                >
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className="sidenav-mini-icon"> C </i>
                  <span className="item-name">Calender</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/kanban"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/special-pages/kanban"
                >
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className="sidenav-mini-icon"> K </i>
                  <span className="item-name">kanban</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/pricing"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/special-pages/pricing"
                >
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className="sidenav-mini-icon"> P </i>
                  <span className="item-name">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/rtl-support"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/special-pages/rtl-support"
                >
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className="sidenav-mini-icon"> RS </i>
                  <span className="item-name">RTL Support</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/timeline"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/special-pages/timeline"
                >
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className="sidenav-mini-icon"> T </i>
                  <span className="item-name">Timeline</span>
                </Link>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          className={`${activeMenu === "0" ? "active" : ""}`}
          eventKey="sidebar-auth"
          bsPrefix={`nav-item ${active === "auth" ? "active" : ""} `}
          onClick={() => setActive("auth")}
        >
          <CustomToggle
            eventKey="sidebar-auth"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="item-name">Authentication</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-auth">
            <ul className="sub-nav">
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/auth/sign-in" ? "active" : ""
                  } nav-link`}
                  to="/auth/sign-in"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> L </i>
                  <span className="item-name">Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/auth/sign-up" ? "active" : ""
                  } nav-link`}
                  to="/auth/sign-up"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> R </i>
                  <span className="item-name">Register</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/auth/confirm-mail" ? "active" : ""
                  } nav-link`}
                  to="/auth/confirm-mail"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> C </i>
                  <span className="item-name">Confirm Mail</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/auth/lock-screen" ? "active" : ""
                  } nav-link`}
                  to="/auth/lock-screen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> L </i>
                  <span className="item-name">Lock Screen</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/auth/recoverpw" ? "active" : ""
                  } nav-link`}
                  to="/auth/recoverpw"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> R </i>
                  <span className="item-name">Recover password</span>
                </Link>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-user"
          bsPrefix={`nav-item ${active === "user" ? "active" : ""} `}
          onClick={() => setActive("user")}
        >
          <CustomToggle
            eventKey="sidebar-user"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z"
                fill="currentColor"
              ></path>
              <path
                d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z"
                fill="currentColor"
              ></path>
              <path
                d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="item-name">Mon Compte</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-user">
            <ul className="sub-nav">
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/app/user-profile"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/user-profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> U </i>
                  <span className="item-name">Mon Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/app/user-add"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/user-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> E </i>
                  <span className="item-name">Nouvel Utilisateur</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/app/user-list"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/user-list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> U </i>
                  <span className="item-name">User List</span>
                </Link>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item> */}
        {isResp && (
          <>
            <li className="nav-item static-item">
              <Link
                className="nav-link static-item disabled"
                to="#"
                tabIndex="-1"
              >
                <span className="default-icon">Actions responsable </span>
                <span className="mini-icon">-</span>
              </Link>
            </li>
            <ul className="sub-nav">
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/app/notifications-list"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/notifications-list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <i className="sidenav-mini-icon"> E </i>
                  <span className="item-name">Demandes d'inscription</span>
                </Link>
              </li>
              <li className="nav-item">
                {false && (
                  <Link
                    className={`${
                      location.pathname === "/dashboard/app/list-table-training"
                        ? "active"
                        : ""
                    } nav-link`}
                    to="/dashboard/app/list-table-training"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>

                    <i className="sidenav-mini-icon"> E </i>
                    <span className="item-name">Liste des formations </span>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/dashboard/app/academy-all-students"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/academy-all-students"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> E </i>
                  <span className="item-name">Tous les Etudiants</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname ===
                    "/dashboard/app/academy-all-professors"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/academy-all-professors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> E </i>
                  <span className="item-name">Tous les professeurs</span>
                </Link>
              </li>
              {/* {entity == "Professor" && currentUser?.isResp && ( */}
              {false && (
                <li className="nav-item">
                  <Link
                    className={`${
                      location.pathname === "/dashboard/app/addAcademy"
                        ? "active"
                        : ""
                    } nav-link`}
                    to="/dashboard/app/addAcademy"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>

                    <i className="sidenav-mini-icon"> E </i>
                    <span className="item-name">Créer Académie</span>
                  </Link>
                </li>
              )}
              {/* )} */}
            </ul>
          </>
        )}
        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Formation</span>
            <span className="mini-icon">-</span>
          </Link>
        </li>
        {/* {entity == "Professor" && ( */}
        <ul className="sub-nav">
          {entity == "professor" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/add-new-training"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/add-new-training"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </g>
                </svg>

                <i className="sidenav-mini-icon"> E </i>
                <span className="item-name">Nouvelle formation</span>
              </Link>
            </li>
          )}
          {entity == "professor" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/list-training"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/list-training"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </g>
                </svg>

                <i className="sidenav-mini-icon"> E </i>
                <span className="item-name">Mes formations</span>
              </Link>
            </li>
          )}
          {entity == "professor" && (
            <li className="nav-item">
              {false && (
                <Link
                  className={`${
                    location.pathname ===
                    "/dashboard/app/list-progressions-trainings"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/dashboard/app/list-progressions-trainings"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g>
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>

                  <i className="sidenav-mini-icon"> E </i>
                  <span className="item-name">Suivi des formations</span>
                </Link>
              )}
            </li>
          )}
          {entity == "Student" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/list-training"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/list-training"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </g>
                </svg>

                <i className="sidenav-mini-icon"> E </i>
                <span className="item-name">Formations disponibles</span>
              </Link>
            </li>
          )}
          {entity == "Student" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/card-list-training"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/card-list-training"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </g>
                </svg>

                <i className="sidenav-mini-icon"> E </i>
                <span className="item-name">Formations Suivies</span>
              </Link>
            </li>
          )}
          {entity == "Student" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/mycertifications"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/mycertifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                  </g>
                </svg>

                <i className="sidenav-mini-icon"> E </i>
                <span className="item-name">Mes certifications</span>
              </Link>
            </li>
          )}
        </ul>
      </Accordion>
    </Fragment>
  );
});

export default VerticalNav;
