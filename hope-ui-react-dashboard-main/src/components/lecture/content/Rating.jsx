import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Rating as ReactRating } from "react-simple-star-rating";
import { useState } from "react";

const Rating = ({
  iconClass,
  fillIconColor = "warning",
  emptyIconColor = "warning-light",
  setRatingValue,
  ...rest
}) => {
  const [rating, setRating] = useState(0);

  // Récupérer la nombre détoile données
  const handleRating = (rate) => {
    setRating(rate);
    //setRatingValue(rate);
  };
  console.log(rating);
  return (
    <ReactRating
      onClick={handleRating}
      allowFraction
      fillIcon={
        <FontAwesomeIcon
          icon={faStar}
          className={classNames(iconClass, `text-${fillIconColor}`)}
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
  );
};

export default Rating;
