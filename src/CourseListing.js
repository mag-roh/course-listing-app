import "./CourseListing.css";
import Card from "./Card";
//import StudentDash from "./StudentDash";
import { useNavigate } from "react-router";
import db from "./firebase";
import { useState, useEffect } from "react";
import { useCourseValue } from "./StateProvider";
const CourseListing = () => {
  const { courses } = useCourseValue();
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="searchbar">
          <input placeholder="Search Courses" />
          <button type="submit">Submit</button>
        </div>
        <div
          className="student__dashboard"
          onClick={() => navigate("/student-dashboard")}
        >
          Student Dashboard
        </div>
      </nav>
      {courses.map((course) => (
        <Card
          id={course.id}
          name={course.name}
          description={course.description}
          instructor={course.instructor}
          image={course.image}
        />
      ))}

      {/*<Card />
      <Card />
      <Card />
      <Card />
  <Card />*/}
    </div>
  );
};
export default CourseListing;
