import React from "react";

function Slide({ banner, index }) {
  const active = index === 0 ? "active" : "";
  const property = "carousel-item relative float-left  h-[600px] " + active;

  return (
    <div className={property} key={banner.id}>
      <img src={banner.image} className="block w-full" alt="..." />
      <div className="carousel-caption  md:block absolute text-center">
        <h5 className="text-xl">{banner.id}</h5>
        <p>{banner.title}</p>
      </div>
    </div>
  );
}

export default Slide;
