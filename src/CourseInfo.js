import React from "react";
import "./CourseInfo.css";
import db from "./firebase";
import { useCourseValue } from "./StateProvider";
const CourseInfo = () => {
  const { selectedCourse } = useCourseValue();
  return (
    <div className="courseInfo">
      <h1>CourseInfo</h1>
      <div className="courseInfo__card">
        <h1>{selectedCourse?.name}</h1>
      </div>
    </div>
  );
};
export default CourseInfo;
