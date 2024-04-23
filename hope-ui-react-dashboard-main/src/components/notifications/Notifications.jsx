import React from "react";
import classNames from "classnames";
import { notifications } from "./dataNotifications";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h5 className="text-body-emphasis mb-3">Dashboard {">"} Notifications</h5>
      <h5 className="text-body-emphasis mb-3 " style={{ fontSize: "50px" }}>
        Notifications
      </h5>
      <div className=" mx-n4 mx-lg-n6 mb-5 border-top">
        {notifications.map((notification, index) => (
          <NotificationItem
            notification={notification}
            className={classNames({
              "border-bottom": index !== notifications.length - 1,
            })}
            key={notification.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
