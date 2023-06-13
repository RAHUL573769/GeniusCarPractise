import React from "react";

const BannerItem = ({ data }) => {
  const { id, image, next, prev } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={image} className="w-full" alt="" />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 ">
        <h1 className="text-white font-bold text-xl ">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4 w-2/5 ">
        <p className="text-xl text-white">
          There are many services available We provide many services
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
