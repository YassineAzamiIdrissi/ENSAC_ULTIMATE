import React from "react";
import bg32 from "../assets/images/team/1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, Nav } from "react-bootstrap";
import {
  faChevronRight,
  faCircle,
  faEllipsis,
  faEnvelope,
  faMessage,
  faPhone,
  faUserPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";
import { Clipboard, PieChart } from "lucide-react";

const AvatarDropdown = ({ user, size }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" className="dropdown-caret-none p-0">
        <Avatar src={user.profilePicture} size={size} />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="avatar-dropdown-menu p-0 overflow-hidden"
        popperConfig={{ strategy: "fixed" }}
        renderOnMount
      >
        <div className="position-relative">
          <div className="p-1">
            <div className="text-center">
              <Avatar
                src={user.avatar}
                size="xl"
                status="online"
                className="border border-light-subtle rounded-circle mx-auto "
              />
              <h6 className="text-black">{user.name}</h6>
            </div>
          </div>
        </div>
        <div className="bg-body-emphasis">
          <div className="p-3 border-bottom border-translucent">
            <div className="d-flex gap-2">
              <Button
                variant="phoenix-secondary"
                startIcon={<FontAwesomeIcon icon={faPhone} />}
                className="ms-auto"
              >
                Contacter
              </Button>

              <Button
                variant="phoenix-primary"
                startIcon={
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                }
                className="ms-auto"
              >
                Email
              </Button>
            </div>
          </div>
          <Nav className="flex-column py-3 border-bottom border-translucent">
            <Nav.Link className="">
              <PieChart size={16} className="me-2 text-body d-inline-block" />
              <span className="text-body-highlight flex-1">
                Voir tous les projets{" "}
              </span>
              <FontAwesomeIcon icon={faChevronRight} className="fs-11" />
            </Nav.Link>
          </Nav>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AvatarDropdown;
