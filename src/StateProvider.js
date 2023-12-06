import React, { createContext, useContext, useState, useEffect } from "react";
import db from "./firebase";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    db.collection("courses").onSnapshot((snapshot) =>
      setCourses(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          instructor: doc.data().instructor,
          enorllment: doc.data().enorllment,
          duration: doc.data().duration,
          schedule: doc.data().schedule,
          location: doc.data().location,
          prerequisites: doc.data().prerequisites,
          syllabus: doc.data().syllabus,
          image: doc.data().thumbnail,
        }))
      )
    );
  }, []);
  const selectCourse = (courseId) => {
    const selected = courses.find((course) => course.id === courseId);
    setSelectedCourse(selected);
  };
  return (
    <CourseContext.Provider value={{ courses, selectedCourse, selectCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseValue = () => useContext(CourseContext);
