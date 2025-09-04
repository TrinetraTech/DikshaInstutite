import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "5 Tips to Score Better in Board Exams",
      date: "Sep 1, 2025",
      author: "Admin",
      excerpt:
        "Board exams are around the corner. Here are 5 simple but powerful strategies to boost your performance...",
      content:
        "Exams can be stressful, but with the right approach, success is achievable. In this article, we’ll cover 5 tips: proper time management, consistent revision, mock tests, active learning, and staying stress-free with mindfulness practices. By following these steps, students can approach exams with confidence and clarity.",
    },
    {
      title: "Why Regular Practice is the Key to Success",
      date: "Aug 20, 2025",
      author: "Diksha Mentor",
      excerpt:
        "Consistency beats intensity. Discover why practicing daily can help you master concepts easily...",
      content:
        "Regular practice keeps your mind sharp. Small but consistent efforts are more effective than cramming. By practicing every day, you reinforce concepts, strengthen memory retention, and reduce last-minute stress. Successful students focus on smart practice, not just hard practice.",
    },
    {
      title: "Best Reference Books for Class 10 Students",
      date: "Aug 5, 2025",
      author: "Faculty Team",
      excerpt:
        "Choosing the right study material is half the battle. Here’s our curated list of the best books...",
      content:
        "The right reference books help students learn faster and smarter. For Class 10, NCERT books are a must, but pairing them with additional references like RD Sharma for Maths and HC Verma for Science makes a huge difference. These books are handpicked by our mentors for clarity and exam relevance.",
    },
    {
      title: "How to Create a Perfect Study Timetable",
      date: "Jul 25, 2025",
      author: "Admin",
      excerpt:
        "A good timetable isn’t just about hours—it’s about energy levels and realistic planning...",
      content:
        "The most effective timetables align tough subjects with high-energy times, usually mornings. Keep lighter revisions for evenings. Add short breaks every 90 minutes and keep 10–15% buffer for delays. A weekly review session on Sundays ensures you’re on track and allows adjustment.",
    },
    {
      title: "Top Mistakes Students Make Before Exams",
      date: "Jul 10, 2025",
      author: "Diksha Mentor",
      excerpt:
        "Last-minute cramming, ignoring sleep, and skipping meals—these mistakes can cost marks...",
      content:
        "Students often stay awake late before exams, skip meals, and cram large portions without understanding. Instead, revise only key notes, eat light balanced meals, and ensure 7–8 hours of sleep. A calm and focused mind performs better than an exhausted one.",
    },
    {
      title: "Importance of Mock Tests for Class 10",
      date: "Jun 28, 2025",
      author: "Faculty Team",
      excerpt:
        "Mock tests aren’t just practice—they’re a mirror to your real performance...",
      content:
        "Taking weekly mock tests helps track progress, identify weak topics, and improve time management. Always simulate exam conditions—fixed time, no interruptions. Review mistakes thoroughly and maintain an error log for targeted revision.",
    },
    {
      title: "How to Stay Motivated During Long Study Hours",
      date: "Jun 15, 2025",
      author: "Admin",
      excerpt:
        "Motivation fades, but discipline sustains. Here’s how to keep going even on tough days...",
      content:
        "Set small achievable goals, reward yourself after completing them, and study in distraction-free environments. Use techniques like the Pomodoro method and group study once a week for energy. Remember, discipline ensures results even when motivation is low.",
    },
    {
      title: "Why NCERT is the Foundation for Class 10",
      date: "May 30, 2025",
      author: "Diksha Mentor",
      excerpt:
        "From board exams to competitive tests, NCERT remains the foundation of success...",
      content:
        "Every topper emphasizes NCERT because it covers core concepts clearly. Focus line-by-line, underline key definitions, and solve all examples. Reference books are useful only after NCERT is fully mastered.",
    },
    {
      title: "Managing Stress During Exams",
      date: "May 10, 2025",
      author: "Faculty Team",
      excerpt:
        "Stress is natural, but unmanaged stress can harm performance. Here’s how to control it...",
      content:
        "Deep breathing, short meditation, and daily physical activity reduce stress levels. Avoid comparing with peers and focus on your own progress. Stay hydrated, take 10-minute breaks, and keep perspective—exams are important, but not the only measure of success.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
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
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {blog.date} • {blog.author}
            </p>
            <p className="text-gray-700 line-clamp-3">{blog.excerpt}</p>
            <p className="mt-4 text-blue-600 font-medium">Read more →</p>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative transform transition-all duration-300 scale-100">
            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
            >
              <FaTimes size={20} />
            </button>

            {/* Blog details */}
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
      )}
    </main>
  );
}
