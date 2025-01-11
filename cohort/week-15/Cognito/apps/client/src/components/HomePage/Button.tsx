import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const { title, routeTo } = props;
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(routeTo)}
      className="p-2 hover:px-1.5  mt-1 px-4 rounded-xl bg-backCol hover:shadow-2xl font-semibold hover:font-normal hover:bg-myGreen transition-all duration-400 "
    >
      {title}
    </button>
  );
};

export default Button;
