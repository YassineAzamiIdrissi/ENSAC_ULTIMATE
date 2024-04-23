import { useState } from "react";
import { Card, Dropdown, Form, Nav } from "react-bootstrap";
import avatar from "../assets/images/team/57.webp";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";
import {
  faHouseChimney,
  faLock,
  faPieChart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ItemsDropdownMenu = ({ className, itemsList, user, currentUser }) => {
  const [navItems] = useState([
    {
      label: "Profile",
      icon: (
        <FontAwesomeIcon icon={faUser} size={16} className="me-2 text-body" />
      ),
      link: `/dashboard/app/user-profile/${currentUser?.id}`,
    },
    {
      label: "Dashboard",
      icon: (
        <FontAwesomeIcon
          icon={faPieChart}
          size={16}
          className="me-2 text-body"
        />
      ),
      link: `/dashboard`,
    },
    {
      label: "Modifier mon profile",
      icon: (
        <FontAwesomeIcon icon={faLock} size={16} className="me-2 text-body" />
      ),
      link: `/dashboard/app/user-profile-edit`,
    },

    {
      label: "Faq",
      icon: (
        <FontAwesomeIcon
          icon={faHouseChimney}
          size={16}
          className="me-2 text-body"
        />
      ),
      link: `#`,
    },
  ]);
  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        "navbar-top-dropdown-menu navbar-dropdown-caret py-0 dropdown-profile shadow border"
      )}
    >
      <Card className="position-relative border-0">
        <Card.Body className="p-0">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2 pt-4 pb-3">
            <Avatar src={user?.profilePicture} size="xl" />
            <h6 className="text-body-emphasis">
              {user?.lastName} {user?.firstName}
            </h6>
          </div>
          <div className="mb-3 mx-3">
            <Form.Control
              type="text"
              placeholder={currentUser?.entity}
              size="sm"
              disabled
              style={{ textAlign: "center", textTransform: "uppercase" }}
            />
          </div>
          <div style={{ height: "10rem" }}>
            <Nav className="nav flex-column mb-2 pb-1">
              {navItems.map((item) => (
                <Nav.Item key={item.label}>
                  <Nav.Link href={item.link} className="px-3">
                    {item.icon}
                    <span className="text-body-highlight">{item.label}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-top border-translucent">
          <hr />
          <div className="px-3">
            <Link
              to="/logout"
              className="btn btn-phoenix-secondary d-flex flex-center w-100"
            >
              <FontAwesomeIcon icon="log-out" className="me-2" size={16} />
              Se déconnecter
            </Link>
          </div>
          <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
            <Link className="text-body-quaternary me-1" to="#!">
              Confidentialité
            </Link>
            •
            <Link className="text-body-quaternary mx-1" to="#!">
              Termes
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default ItemsDropdownMenu;
