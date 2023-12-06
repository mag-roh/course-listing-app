import React from "react";
import "./SyllabusExpand.css";
const SyllabusExpand = ({ content, topic, week }) => {
  return (
    <div className="syllabus__details">
      <h5>Week:{week}</h5>
      <h4>{topic}</h4>
      <p>{content}</p>
    </div>
  );
};
export default SyllabusExpand;
