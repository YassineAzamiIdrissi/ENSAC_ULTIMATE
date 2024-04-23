import classNames from "classnames";
import React from "react";
import { Button as BsButton, Spinner } from "react-bootstrap";

const Button = (
  children,
  startIcon,
  endIcon,
  loading,
  loadingPosition,
  className,
  variant = "",
  ...rest
) => {
  return (
    <BsButton
      variant={variant}
      type="button"
      disabled={loading}
      {...rest}
      className={classNames(className, {
        "btn-loading lh-1 d-flex align-items-center position-relative": loading,
      })}
    >
      {loading && loadingPosition === "start" && (
        <Spinner animation="border" role="status" className="me-2">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {startIcon &&
        React.cloneElement(startIcon, {
          className: classNames(startIcon.props.className, "me-1"),
        })}

      {children}

      {endIcon &&
        React.cloneElement(endIcon, {
          className: classNames(endIcon.props.className, "ms-1"),
        })}
      {loading && loadingPosition === "end" && (
        <Spinner animation="border" role="status" className="ms-2">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </BsButton>
  );
};

export default Button;
