import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample notes data
const notesData = [
  { id: 1, class: 6, subject: "Math", title: "Fractions", description: "Basics of fractions..." },
  { id: 2, class: 7, subject: "Science", title: "Plants", description: "Photosynthesis details..." },
  { id: 3, class: 8, subject: "English", title: "Grammar", description: "Tenses and usage..." },
  { id: 4, class: 9, subject: "Math", title: "Algebra", description: "Linear equations..." },
  { id: 5, class: 10, subject: "Science", title: "Physics", description: "Newton Laws..." },
  { id: 6, class: 11, subject: "Math", title: "Calculus", description: "Differentiation basics..." },
  { id: 7, class: 12, subject: "Physics", title: "Optics", description: "Reflection & Refraction..." },
];

// Classes and subjects options
const classes = [6, 7, 8, 9, 10, 11, 12];
const subjects = [...new Set(notesData.map(note => note.subject))];

export default function NotesPage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // Filter notes
  const filteredNotes = notesData.filter(note => {
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
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            {classes.map(cls => (
              <option key={cls} value={cls}>
                Class {cls}
              </option>
            ))}
          </select>

          <select
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">All Subjects</option>
            {subjects.map(sub => (
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
              {filteredNotes.map(note => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-lg font-semibold text-gray-700">{note.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    Class {note.class} | {note.subject}
                  </p>
                  <p className="text-gray-600">{note.description}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 mt-8"
            >
              No notes found for selected filters.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
