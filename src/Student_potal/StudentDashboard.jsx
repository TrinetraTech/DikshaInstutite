import React from "react";
import Lottie from "lottie-react";
import Schoolanimation from "../assets/animation/school.json"; // adjust path if needed

const StudentDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex">
      {/* Sidebar space */}
      <div className=" hidden md:block"></div>

      {/* Main content */}
      <div className="flex-1 relative flex flex-col items-center justify-center h-screen overflow-hidden p-4">
        {/* Background Welcome Text */}
        <h1 className="absolute text-[15vw] sm:text-[12vw] md:text-[10vw] font-extrabold text-gray-200 opacity-10 select-none z-0 text-center w-full">
          Welcome
        </h1>

        {/* Lottie Animation */}
        <div className="flex-1 flex items-center justify-center z-10 w-full max-h-[60vh]">
          <Lottie
            animationData={Schoolanimation}
            loop={true}
            style={{ width: "auto", height: "100%" }}
          />
        </div>

        {/* Foreground Welcome Text */}
        <div className="flex flex-col items-center z-20 mt-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-2">
            Welcome to Diksha Classes
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center">
            Student Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
