import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch("/content/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts))
      .catch((err) => console.error("Blog Load Error:", err));
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        Diksha Classes Blog
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Insights, tips & updates from our mentors and faculty team
      </p>

      {/* Blog Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <article
            key={idx}
            onClick={() => setSelectedBlog(blog)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {blog.date} • {blog.author}
              </p>

              <p className="text-gray-700 line-clamp-3">{blog.excerpt}</p>

              <p className="mt-4 text-blue-600 font-medium">Read more →</p>
            </div>
          </article>
        ))}
      </div>

      {/* Popup */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
            >
              <FaTimes size={18} />
            </button>

            {/* Popup Image */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedBlog.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                {selectedBlog.date} • {selectedBlog.author}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {selectedBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
