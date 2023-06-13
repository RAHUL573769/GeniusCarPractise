import React from "react";
import img1 from "../../genius-car-resources-main/assets/images/banner/1.jpg";
import img2 from "../../genius-car-resources-main/assets/images/banner/2.jpg";
import img3 from "../../genius-car-resources-main/assets/images/banner/3.jpg";
import img4 from "../../genius-car-resources-main/assets/images/banner/4.jpg";
import BannerItem from "./BannerItem";
const Banner = () => {
  const bannerData = [
    {
      image: img1,
      previous: 4,
      next: 2,
      id: 1
    },
    {
      image: img2,
      previous: 1,
      next: 3,
      id: 2
    },
    {
      image: img3,
      previous: 2,
      next: 4,
      id: 3
    },
    {
      image: img4,
      previous: 3,
      next: 1,
      id: 4
    }
  ];
  return (
    <div>
      <div className="carousel w-full">
        {bannerData.map((data) => (
          <BannerItem key={data.id} data={data}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
