import React from "react";
import "./Card.css";
import { useNavigate } from "react-router";
//import { useCourseValue } from "./StateProvider";
const Card = ({ id, name, description, instructor, image }) => {
  // const courses = useCourseValue();
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/courses/${id}`)}>
      <img src={image} alt="Course" />
      <div className="card__title">
        <h1>{name}</h1>
        <h3>BY: {instructor}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
