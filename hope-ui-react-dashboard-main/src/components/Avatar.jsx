import classNames from "classnames";
import avatar from "../assets/images/team/1.webp";
import { Children } from "react";

// export type Size = '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'l' | 'm' | 's';
// export type Variant = 'image' | 'name' | 'emoji';
// export type Rounded = 'circle' | 'square' | 'soft';
// export type Status = 'online' | 'offline' | 'away' | 'do-not-disturb';

const Avatar = ({
  size,
  src,
  variant = "image",
  rounded = "circle",
  status,
  className,
  imageClassName,
  thumbnail,
  children,
  placeholder,
}) => {
  return (
    <div
      className={classNames(className, `avatar avatar-${size}`, {
        [`status-${status}`]: status,
      })}
    >
      {variant === "image" && (
        <img
          src={src ? src : avatar}
          alt="avatar"
          className={classNames(imageClassName, {
            "img-thumbnail bg-body-emphasis": thumbnail,
            "avatar-placeholder": !src || placeholder,
            "rounded-circle": rounded === "circle",
            "rounded-soft": rounded === "soft",
          })}
        />
      )}

      {variant === "name" && (
        <div
          className={classNames("avatar-name", {
            "rounded-circle": rounded === "circle",
            "rounded-soft": rounded === "soft",
          })}
        >
          <span>{children}</span>
        </div>
      )}
      {variant === "emoji" && (
        <div
          className={classNames("avatar-emoji", {
            "rounded-circle": rounded === "circle",
            "rounded-soft": rounded === "soft",
          })}
        >
          <span role="img" aria-label="Emoji">
            {children}
          </span>
        </div>
      )}
    </div>
  );
};

export const AvatarGroup = ({ children, className, total, size }) => {
  return (
    <div className={classNames(className, "avatar-group")}>
      {children}
      {total && total > Children.count(children) && (
        <Avatar size={size} variant="name">
          +{total - Children.count(children)}
        </Avatar>
      )}
    </div>
  );
};

Avatar.Group = AvatarGroup;

export default Avatar;
