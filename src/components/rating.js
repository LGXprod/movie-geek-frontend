import React, { useState } from "react";
import Button from "./button";
import StarActive from "../images/star-active.png";
import StarInactive from "../images/star-inactive.png";

const Rating = ({ id, ratings, setRating }) => {
  const [ratingHovered, setRatingHover] = useState();
  const [isSubmitted, setIsSumbitted] = useState(false);

  return (
    <div class="rating">
      <div>
        {(() => {
          const starComponents = [];

          for (let i = 0; i <= 4; i++)
            starComponents.push(
              <img
                alt="star icon"
                src={
                  !ratingHovered || ratingHovered < i
                    ? StarInactive
                    : StarActive
                }
                onMouseOver={() => { if (!isSubmitted) setRatingHover(i); }}
                onMouseLeave={() => { if (!isSubmitted) setRatingHover(null); }}
                onClick={() => {
                  setIsSumbitted(true);
                  setRating({...ratings, [id]: i+1});
                }}
              />
            );

          return starComponents;
        })()}
      </div>

      <Button label="Haven't Seen" />
    </div>
  );
};

export default Rating;
