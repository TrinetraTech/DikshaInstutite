import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotesPage() {
  const [notesData, setNotesData] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // ✅ Fetch CMS Data
  useEffect(() => {
    fetch("/content/notes.json")
      .then((res) => res.json())
      .then((data) => setNotesData(data.notes))
      .catch((err) => console.error("CMS Load Error:", err));
  }, []);

  const classes = [...new Set(notesData.map((note) => note.class))];
  const subjects = [...new Set(notesData.map((note) => note.subject))];

  const filteredNotes = notesData.filter((note) => {
    return (
      (selectedClass === "" || note.class === Number(selectedClass)) &&
      (selectedSubject === "" || note.subject === selectedSubject)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Student Notes
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
          <select
            className="p-2 border rounded-md shadow-sm"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                Class {cls}
              </option>
            ))}
          </select>

          <select
            className="p-2 border rounded-md shadow-sm"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">All Subjects</option>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Notes List */}
        <AnimatePresence>
          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note, index) => (
                <motion.a
                  key={index}
                  href={note.file}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl block"
                >
                  <h2 className="text-lg font-semibold text-gray-700">
                    {note.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-2">
                    Class {note.class} | {note.subject}
                  </p>

                  <p className="text-gray-600">{note.description}</p>
                </motion.a>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 mt-8"
            >
              No notes found.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
