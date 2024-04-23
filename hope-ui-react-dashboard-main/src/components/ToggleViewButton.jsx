import classNames from 'classnames';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const ToggleViewButton = ({
  active,
  tooltip,
  onClick,
  children
}) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip style={{ position: 'fixed' }}>{tooltip}</Tooltip>}
    >
      <div>
        <Button
          variant="phoenix-primary"
          className={classNames('px-3', {
            'text-body border-0': active
          })}
          onClick={onClick}
        >
          {children}
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default ToggleViewButton;
