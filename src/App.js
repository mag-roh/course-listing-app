import "./App.css";
import CourseListing from "./CourseListing";
import { Routes, Route } from "react-router-dom";
import CourseInfo from "./CourseInfo";
import StudentDash from "./StudentDash";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="/" element={<CourseListing />} />
        <Route path="/student-dashboard" element={<StudentDash />} />
      </Routes>
    </div>
  );
}

export default App;
