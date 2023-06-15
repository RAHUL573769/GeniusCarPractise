import React from "react";
import parts from "../../genius-car-resources-main/assets/images/about_us/parts.jpg";

import person from "../../genius-car-resources-main/assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" relative w-1/2">
            <img
              src={parts}
              alt=""
              className=" w-4/5 h-full rounded-lg shadow-2xl"
            />
            <img
              src={person}
              alt=""
              className=" w-3/5 absolute right-5 top-1/2 rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <h1 className=" my-5 text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
