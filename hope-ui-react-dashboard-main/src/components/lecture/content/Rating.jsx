import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Rating as ReactRating } from "react-simple-star-rating";
import { useState } from "react";
import { Box } from "@mui/material";

const Rating = ({
  iconClass,
  fillIconColor = "warning",
  emptyIconColor = "warning-light",
  setRatingValue,
  rating,
  setRating,
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <Box position={"relative"} width={"100%"}>
      <ReactRating
        iconsCount={4}
        showTooltip={showTooltip}
        tooltipArray={["Très mauvais", "Mauvais", "Bien", "Très bien"]}
        tooltipStyle={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          width: "max-content",
          transform: "translateX(-50%)",
          background: "black",
          color: "white",
          fontSize: "12px",
          padding: "0px 5px 0 5px",
        }}
        onClick={handleRating}
        fillIcon={
          <FontAwesomeIcon
            icon={faStar}
            className={classNames(iconClass, `text-${fillIconColor}`)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        }
        emptyIcon={
          <FontAwesomeIcon
            icon={farStar}
            className={classNames(iconClass, `text-${emptyIconColor}`)}
          />
        }
        {...rest}
      />
    </Box>
  );
};

export default Rating;
