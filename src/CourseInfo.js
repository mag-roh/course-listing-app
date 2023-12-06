import React, { useEffect, useState } from "react";
import "./CourseInfo.css";
import db from "./firebase";
//import { useCourseValue } from "./StateProvider";
import { useParams } from "react-router-dom";
import SyllabusExpand from "./SyllabusExpand";
const CourseInfo = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  useEffect(() => {
    if (courseId) {
      db.collection("courses")
        .doc(courseId)
        .onSnapshot((snapshot) => {
          if (snapshot.exists) {
            setCourseDetails(snapshot.data());
          } else {
            setCourseDetails(null);
          }
        });
    }
  }, [courseDetails, courseId]);
  return (
    <div className="courseInfo">
      <h1>CourseInfo</h1>
      {courseDetails ? (
        <div className="courseInfo__card">
          <h1>{courseDetails.name}</h1>
          <br />
          <h2>By:{courseDetails.instructor}</h2>
          <p>{courseDetails.description}</p>
          <p>{courseDetails.enrollmentStatus}</p>
          <p>{courseDetails.duration}</p>
          <p>{courseDetails.schedule}</p>
          <p>{courseDetails.location}</p>
          <p>{courseDetails.prerequisites}</p>
          {courseDetails.syllabus.map((syllabusCourse) => (
            <SyllabusExpand
              content={syllabusCourse.content}
              topic={syllabusCourse.topic}
              week={syllabusCourse.week}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default CourseInfo;
