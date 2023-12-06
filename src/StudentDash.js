import React, { useState, useEffect } from "react";
import "./StudentDash.css";
import { courses } from "./StateProvider";
const StudentDash = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return <div className="student__dashboard">Welcome Alice!!</div>;
};
export default StudentDash;
