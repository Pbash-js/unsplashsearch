import React from "react";
import Card from "../Card/Card";

const ImageGrid = (props) => {
  const data = props.data || [
    { urls: { regular: "" }, description: "", id: "" },
  ];

  console.log(data);

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((item) => (
          <Card url={item.urls.thumb} alt={item.description} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
