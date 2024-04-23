import React, { useEffect } from 'react';
import classNames from 'classnames';

const PhoenixOffcanvasContainer = ({ children, className }) => {
  return (
    <div className={classNames(className, 'phoenix-offcanvas-container')}>
      {children}
    </div>
  );
};

const PhoenixOffcanvas = ({
  children,
  open,
  fixed,
  onHide,
  className,
  backdropClassName,
  style,
  placement,
  noBackdrop
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [open]);

  return (
    <>
      <div
        className={classNames(
          className,
          'phoenix-offcanvas bg-body-highlight',
          {
            show: open,
            'phoenix-offcanvas-fixed': fixed,
            [`phoenix-offcanvas-${placement}`]: placement
          }
        )}
        style={style}
      >
        {children}
      </div>
      {!noBackdrop && (
        <div
          className={classNames(
            backdropClassName,
            'phoenix-offcanvas-backdrop'
          )}
          onClick={onHide}
        />
      )}
    </>
  );
};

export { PhoenixOffcanvasContainer, PhoenixOffcanvas };
export default PhoenixOffcanvas;
