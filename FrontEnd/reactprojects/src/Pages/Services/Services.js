import React from "react";
import { useQuery } from "react-query";
import SingleService from "./SingleService";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await fetch("services.json");
      const res = await data.json();
      return res;
    }
  });
  return (
    <div className=" grid  gap-4 my-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <SingleService key={service._id} service={service}></SingleService>
      ))}
    </div>
  );
};

export default Services;
