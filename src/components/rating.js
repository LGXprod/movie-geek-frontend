import React, { useState, useEffect } from "react";
import Button from "./button";
import StarActive from "../images/star-active.png";
import StarInactive from "../images/star-inactive.png";

const Rating = ({ id, ratings, setRating }) => {
  const [ratingHovered, setRatingHover] = useState(null);
  const [isSubmitted, setIsSumbitted] = useState(false);
  const [isNotSeen, setIsNotSeen] = useState(null);

  useEffect(() => {
    if (isNotSeen) setRating({ ...ratings, [id]: 0 });
  }, [isNotSeen]);

  return (
    <div className="rating">
      <div>
        {(() => {
          const starComponents = [];

          for (let i = 0; i <= 4; i++)
            starComponents.push(
              <img
                key={i}
                alt="star icon"
                className={isNotSeen ? "not-seen" : ""}
                src={
                  isNotSeen ? (
                    require("../images/star-inactive-2.png")
                  ) : ratingHovered === null || ratingHovered < i ? (
                    StarInactive
                  ) : (
                    StarActive
                  )
                }
                onMouseOver={() => {
                  if (!isSubmitted) setRatingHover(i);
                }}
                onMouseLeave={() => {
                  if (!isSubmitted) setRatingHover(null);
                }}
                onClick={() => {
                  setIsSumbitted(true);
                  console.log("ratings", ratings)
                  setRating({ ...ratings, [id]: i + 1 });
                }}
              />
            );

          return starComponents;
        })()}
      </div>

      <Button label="Haven't Seen" cb={() => {
        setIsNotSeen(true);
        setIsSumbitted(true);
      }} />
    </div>
  );
};

export default Rating;
