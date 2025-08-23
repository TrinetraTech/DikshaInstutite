import React from "react";

const PopupForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#3e26cf3d] bg-opacity-60 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-[75%] p-4 sm:p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>

        {/* Title Section */}
        <p className="text-blue-600 font-medium text-sm">Get in Touch</p>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
          Let’s Chat, Contact with Us
        </h2>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm">
          Have any questions or feedback? We’re here to help. Send us a message,
          we’ll get back to you within 24 hours.
        </p>

        {/* Form Section */}
        <form className="mt-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <input
            type="tel"
            placeholder="+1 (555) 444-0000"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          {/* Dropdown: Class Selection */}
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
            <option value="">Select Class</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>

          {/* Dropdown: Who is filling the form */}
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
            <option value="">Who is filling the form?</option>
            <option value="parent">Parent</option>
            <option value="student">Student</option>
          </select>

          <textarea
            placeholder="Type your message"
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
