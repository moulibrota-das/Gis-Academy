import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-[#00538e] max-w-lg md:max-w-xl w-full h-[450px] flex flex-col justify-evenly hover:shadow-xl transition-shadow duration-300">
      {/* Badge for Course Type */}
      <p className="text-gray-400 uppercase text-sm tracking-wider">
        Classroom Based Teaching
      </p>

      {/* Course Title */}
      <h1 className="text-green-600 text-2xl font-bold">
        {course.name} Course
      </h1>

      {/* Duration Section */}
      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
        <p className="text-green-700 font-medium">
          Duration: <span className="font-normal">{course.duration}</span>
        </p>
      </div>

      {/* Topics Section */}
      <p className="text-gray-700 font-medium">Topics Covered:</p>
      <ul className="list-disc list-outside pl-5 mb-2 text-gray-600 space-y-1">
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      {/* Software Info */}
      <p className="text-gray-600 font-medium">
        Software Used:{" "}
        <span className="text-green-700 font-medium">{course.software}</span>
      </p>

      {/* Buttons Section */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-darkGreen text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-green-700">
          Sign up
        </button>
        <button className="border border-darkGreen text-darkGreen px-6 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-green-50">
          Read more
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
