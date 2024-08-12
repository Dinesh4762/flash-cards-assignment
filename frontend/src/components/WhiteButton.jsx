import React from 'react'
import { Link } from 'react-router-dom';

const WhiteButton = ({label,onclick}) => {
  return (
    <Link
      to={label == "Dashboard" ? "/dashboard" : ""}
      className="mr-5 max-[450px]:mr-0 ml-auto cursor-pointer bg-white text-black px-3 py-1 rounded-2xl font-inter font-semibold text-sm"
      onClick={onclick}
    >
      {label}
    </Link>
  );
}

export default WhiteButton
