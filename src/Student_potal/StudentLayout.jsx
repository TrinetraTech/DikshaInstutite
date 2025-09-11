import { Outlet } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";

function StudentLayout() {
  return (
    <div className="student-layout">
      {/* Student Navbar always visible */}
      <StudentNavbar />

      {/* Render the active student page here */}
      <div
        className="student-content flex-1 p-6 md:ml-64 bg-gray-50 min-h-screen"
        style={{ padding: "20px" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default StudentLayout;
