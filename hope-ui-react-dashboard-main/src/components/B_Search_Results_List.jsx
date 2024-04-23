import React from "react";
import "./searchbar.css";
import { Link, useNavigate } from "react-router-dom";
const B_Search_Results_List = ({ data }) => {
  const navigate = useNavigate();
  const move = (id) => {
    navigate(`/singleCourse/${id}`);
    navigate(0);
  };
  return (
    <div className="result-list">
      {data?.map((item, index) => (
        <Link
          key={index}
          onClick={() => {
            move(item.id);
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default B_Search_Results_List;
