import React, { useEffect, useState } from "react";

const PopupForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#3e26cf3d] bg-opacity-60 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        {/* Title Section */}
        <p className="text-blue-600 font-semibold">Get in Touch</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
          Let’s Chat, Contact with Us
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Have any questions or feedback? We’re here to help. Send us a
          message, we’ll get back to you within 24 hours.
        </p>

        {/* Form Section */}
        <form className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            placeholder="yourname@company.com"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="+1 (555) 444-0000"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Type your message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
