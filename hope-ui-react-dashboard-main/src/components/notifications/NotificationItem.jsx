import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Avatar from "../Avatar";
import { Button, Row, Col } from "react-bootstrap";

const NotificationItem = ({ notification, className }) => {
  return (
    <div
      className={classNames(
        className,
        "py-3 notification-card position-relative hover-actions-trigger px-4 px-lg-6 px-sm-3"
      )}
    >
      <div className="d-flex align-items-center justify-content-between position-relative">
        <div className="  d-flex">
          <Avatar
            src={notification.avatar}
            placeholder={!notification.avatar}
            size={"xl"}
            className="me-3 status-online"
          />
          <div className={classNames("flex-1 me-sm-3")}>
            <h4 className="fs-9 text-body-emphasis">{notification.name}</h4>
            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
              <span className="me-1 fw-bold fs-10">
                {notification.interactionIcon}
              </span>
              <span>{notification.interaction}</span>

              <span className="ms-2 text-body-quaternary text-opactity-75 fw-bold fs-10">
                {notification.ago}
              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <FontAwesomeIcon icon={faClock} className="me-1" />
              {notification.date}
            </p>
          </div>
        </div>

        <div className="hover-actions end-0">
          <Row className="g-2 mb-2">
            <Col xs="6" sm={6} className="flex-1">
              <Button variant="phoenix-success" className="w-100">
                <span className="d-none d-sm-inline-block">Approuver</span>
              </Button>
            </Col>

            <Col xs="6" sm={6} className="flex-1">
              <Button variant="phoenix-danger" className="w-100">
                <span className="d-none d-sm-inline-block">Rejeter</span>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
