import "./CourseListing.css";
import Card from "./Card";
//import StudentDash from "./StudentDash";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useCourseValue } from "./StateProvider";
const CourseListing = () => {
  const { courses } = useCourseValue();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [initialSearchPerformed, setInitialSearchPerformed] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // GPZfVOUJQmwVmoVg9ZmR: Alice Johnson , koM7Uuu3zYAY69rapB7S: Bob Smith, XCOt9UL2oBDHdDGYMCQg: Mary Joe, YHmAZwNADsRL5x5KChx3: Tyson Russell,VOIfdWvy1cNEKjEOQKVP: Ben Jackson, nLsRSw4WJ71O6xuTpxFo: yuta Nishimoto
  }, []);
  const handleSearch = () => {
    console.log("Courses:", courses);
    console.log("Search Term:", searchTerm);
    const filtered = courses.filter(
      (filteredCourses) =>
        filteredCourses.name.toLowerCase().includes(searchTerm.trim()) ||
        filteredCourses.instructor.toLowerCase().includes(searchTerm.trim())
    );
    console.log("Filtered Items:", filtered);
    setFilteredItems(filtered);
    setInitialSearchPerformed(true);
  };
  useEffect(() => {
    if (initialSearchPerformed) setFilteredItems([]);
  }, [initialSearchPerformed]);
  return (
    <div>
      <nav className="navbar">
        <div className="searchbar">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <button onClick={handleSearch}>Submit</button>
        </div>
        <div
          className="student__dashboard"
          onClick={() => navigate("/student-dashboard")}
        >
          Student Dashboard
        </div>
      </nav>
      {searchTerm
        ? filteredItems.map((filteredItem) => (
            <Card
              key={filteredItem.id}
              id={filteredItem.id}
              name={filteredItem.name}
              description={filteredItem.description}
              instructor={filteredItem.instructor}
              image={filteredItem.image}
            />
          ))
        : courses.map((course) => (
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
