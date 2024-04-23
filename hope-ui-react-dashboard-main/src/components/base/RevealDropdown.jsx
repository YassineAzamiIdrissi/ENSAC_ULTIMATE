import React from 'react';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export const RevealDropdownTrigger = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('btn-reveal-trigger', className)} {...rest}>
      {children}
    </div>
  );
};

const RevealDropdown = ({
  children,
  className,
  btnClassName,
  dropdownMenuClassName,
  icon = faEllipsis
}) => {
  return (
    <Dropdown className={classNames(className)} align="end">
      <Dropdown.Toggle
        variant=""
        size="sm"
        className={classNames(
          btnClassName,
          'btn-reveal dropdown-caret-none transition-none'
        )}
      >
        <FontAwesomeIcon icon={icon} className="fs-10" />
      </Dropdown.Toggle>
      <Dropdown.Menu
        align="end"
        className={classNames(dropdownMenuClassName, 'py-2')}
      >
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RevealDropdown;
