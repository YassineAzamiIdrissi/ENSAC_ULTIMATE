import classNames from "classnames";
import React, { PropsWithChildren, useEffect } from "react";

export const PhoenixOffcanvasContainer = ({ children, className }) => {
  return (
    <div className={classNames(className, "phoenix-offcanvas-container")}>
      {children}
    </div>
  );
};

const ModalLeft = ({
  children,
  open,
  fixed,
  onHide,
  className,
  backdropClassName,

  placement,
  noBackdrop,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <>
      <div
        className={classNames(
          className,
          "phoenix-offcanvas bg-body-highlight",
          {
            show: open,
            "phoenix-offcanvas-fixed": fixed,
            [`phoenix-offcanvas-${placement}`]: placement,
          }
        )}
        style={{
          height: "100vh",
          marginTop: "-15px",
          borderTopLeftRadius: "10px",
        }}
      >
        {children}
      </div>
      {!noBackdrop && (
        <div
          className={classNames(
            backdropClassName,
            "phoenix-offcanvas-backdrop"
          )}
          onClick={onHide}
        />
      )}
    </>
  );
};

export default ModalLeft;
