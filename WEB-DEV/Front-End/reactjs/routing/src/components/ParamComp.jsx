import React from "react";
import { useParams } from "react-router-dom";
const ParamComp = () => {
  const { id } = useParams(); // this id is route parameter not query parameter
  return <div>Handling Param id = {id}</div>;
};

export default ParamComp;
