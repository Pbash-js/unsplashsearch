import React from "react";
const Card = ({ url, alt }) => {
  return (
    <img
      src={url}
      className="col-12 col-sm-6 col-md-4 col-lg-3 pb-4"
      alt={alt}
    />
  );
};

export default Card;
