import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Schoolanimation from "../assets/animation/school.json";

const StudentDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetch("/content/dashboard.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.notices?.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );

        setDashboardData({ ...data, notices: sorted });
      })
      .catch((err) => console.error("Dashboard CMS Load Error:", err));
  }, []);

  const isImage = (file) => {
    return /\.(jpg|jpeg|png|webp|gif)$/i.test(file);
  };

  const isNewNotice = (date) => {
    const noticeDate = new Date(date);
    const now = new Date();
    const diffDays = (now - noticeDate) / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  if (!dashboardData) return null;

  return (
    <div className="bg-gray-100 min-h-screen w-full flex">
      <div className="flex-1 flex flex-col items-center p-6">
        
        {/* Title */}
        <div className="text-center mt-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            {dashboardData.title}
          </h2>
          <p className="text-xl text-gray-600">{dashboardData.subtitle}</p>
        </div>

        {/* Notices */}
        <div className="w-full max-w-5xl mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Latest Notices
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {dashboardData.notices?.map((notice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition relative"
              >
                {isNewNotice(notice.date) && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}

                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-lg text-indigo-600">
                    {notice.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {new Date(notice.date).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{notice.description}</p>

                {/* Image Preview */}
                {notice.file && isImage(notice.file) && (
                  <img
                    src={notice.file}
                    alt={notice.title}
                    className="w-full rounded-lg mb-4 object-cover max-h-60"
                  />
                )}

                {/* Download */}
                {notice.file && (
                  <a
                    href={notice.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Download File
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
