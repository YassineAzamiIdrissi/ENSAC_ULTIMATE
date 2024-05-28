import React from "react";
import classNames from "classnames";
import { Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { comCss } from "../ComponentsCss";

export const RevealDropdownTrigger = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("btn-reveal-trigger", className)} {...rest}>
      {children}
    </div>
  );
};

const RevealDropdown = ({
  children,
  className,
  btnClassName,
  dropdownMenuClassName,
  icon = faEllipsis,
  placeholder,
}) => {
  const classes = comCss();

  return (
    <Dropdown className={classNames(className)} align="end">
      <Dropdown.Toggle
        variant=""
        size="sm"
        className={classNames(
          btnClassName,
          "btn-reveal dropdown-caret-none transition-none"
        )}
      >
        <Button
          variant="outlined"
          className={`${classes.button} ${classes.button_2}`}
        >
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className="fs-10 "
              style={{ marginRight: "5px" }}
            />
          )}
          {placeholder}
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        align="end"
        className={classNames(dropdownMenuClassName, "py-2")}
      >
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RevealDropdown;
