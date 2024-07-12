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
        {entity != "admin" && (
          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Actions d'administration</span>
              <span className="mini-icon">-</span>
            </Link>
          </li>
        )}
        {entity == "admin" && (
          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Actions d'administration</span>
              <span className="mini-icon">-</span>
            </Link>
          </li>
        )}
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
          {entity == "admin" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/add-new-professor"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/add-new-professor"
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
                <span className="item-name">Ajouter un professeur</span>
              </Link>
            </li>
          )}
          {entity == "admin" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/add-to-academies"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/add-to-academies"
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
                <span className="item-name">Ajouter une académie</span>
              </Link>
            </li>
          )}
          {entity == "admin" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/admin-all-profs"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/admin-all-profs"
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
                <span className="item-name">Liste des professeurs</span>
              </Link>
            </li>
          )}
          {entity == "admin" && (
            <li className="nav-item">
              <Link
                className={`${
                  location.pathname === "/dashboard/app/admin-all-academies"
                    ? "active"
                    : ""
                } nav-link`}
                to="/dashboard/app/admin-all-academies"
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
                <span className="item-name">Liste des académies</span>
              </Link>
            </li>
          )}
        </ul>
      </Accordion>
    </Fragment>
  );
});

export default VerticalNav;
